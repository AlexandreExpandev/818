import { Connection, Request, TYPES } from 'tedious';
import config from '@/config';
import logger from '@/core/services/logger.service';

// This is a simplified connection manager. For production, consider a robust pooling library.
let connection: Connection | null = null;

const dbConfig = {
  server: config.db.server,
  authentication: {
    type: 'default' as const,
    options: {
      userName: config.db.user,
      password: config.db.password,
    },
  },
  options: {
    ...config.db.options,
    database: config.db.database,
    port: config.db.port,
  },
};

const connect = (): Promise<Connection> => {
  return new Promise((resolve, reject) => {
    if (connection && connection.state === 'LoggedIn') {
      return resolve(connection);
    }

    connection = new Connection(dbConfig);

    connection.on('connect', (err) => {
      if (err) {
        logger.error('Database connection failed:', err);
        connection = null;
        return reject(err);
      }
      logger.info('Successfully connected to SQL Server.');
      resolve(connection as Connection);
    });

    connection.on('error', (err) => {
      logger.error('Database connection error:', err);
      connection = null; // Invalidate connection on error
    });

    connection.connect();
  });
};

const executeProcedure = async (procedureName: string, params: { name: string; type: any; value: any }[] = []): Promise<any[]> => {
  try {
    const conn = await connect();
    return new Promise((resolve, reject) => {
      const request = new Request(procedureName, (err, rowCount, rows) => {
        if (err) {
          logger.error(`Error executing procedure ${procedureName}:`, err);
          return reject(err);
        }
        
        const resultSets: any[][] = [];
        let currentSet: any[] = [];

        rows.forEach((row: any, index: number) => {
          const rowObject: { [key: string]: any } = {};
          row.forEach((column: any) => {
            rowObject[column.metadata.colName] = column.value;
          });
          currentSet.push(rowObject);

          // Tedious doesn't explicitly signal end of a result set in the `rows` array.
          // This logic assumes a new result set if the column metadata changes.
          // For robust multi-result set handling, more complex logic or a different driver might be needed.
          if (index + 1 < rows.length && rows[index+1][0].metadata.colName !== row[0].metadata.colName) {
             resultSets.push(currentSet);
             currentSet = [];
          }
        });
        if(currentSet.length > 0) resultSets.push(currentSet);

        resolve(resultSets.length > 1 ? resultSets : resultSets[0] || []);
      });

      params.forEach(p => request.addParameter(p.name, p.type, p.value));

      conn.callProcedure(request);
    });
  } catch (error) {
    logger.error('Failed to execute stored procedure.', { procedure: procedureName, error });
    throw error;
  }
};

export const db = {
  connect,
  executeProcedure,
  TYPES,
};
