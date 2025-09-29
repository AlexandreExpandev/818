import 'dotenv/config';

const getConfigValue = (key: string, defaultValue?: string): string => {
  const value = process.env[key];
  if (value) {
    return value;
  }
  if (defaultValue !== undefined) {
    return defaultValue;
  }
  throw new Error(`Configuration error: Missing required environment variable ${key}`);
};

const config = {
  nodeEnv: getConfigValue('NODE_ENV', 'development'),
  port: parseInt(getConfigValue('PORT', '3000'), 10),
  rateLimit: {
    windowMs: parseInt(getConfigValue('RATE_LIMIT_WINDOW_MS', '900000'), 10), // 15 minutes
    maxRequests: parseInt(getConfigValue('RATE_LIMIT_MAX_REQUESTS', '100'), 10),
  },
  db: {
    server: getConfigValue('DB_SERVER'),
    port: parseInt(getConfigValue('DB_PORT', '1433'), 10),
    user: getConfigValue('DB_USER'),
    password: getConfigValue('DB_PASSWORD'),
    database: getConfigValue('DB_DATABASE'),
    options: {
      encrypt: process.env.NODE_ENV === 'production', // Use encryption for production
      trustServerCertificate: process.env.NODE_ENV !== 'production', // Trust self-signed certs in dev
      connectTimeout: parseInt(getConfigValue('DB_CONNECT_TIMEOUT', '15000'), 10),
      requestTimeout: parseInt(getConfigValue('DB_REQUEST_TIMEOUT', '15000'), 10),
    },
  },
  jwt: {
    secret: getConfigValue('JWT_SECRET', 'default-secret'),
    expiresIn: getConfigValue('JWT_EXPIRES_IN', '1h'),
  },
};

export default config;
