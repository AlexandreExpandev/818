/**
 * @interface GreetingFont
 * @description Defines the structure for font properties as per FI-004.
 */
export interface GreetingFont {
  family: string;
  size: string;
  color: string;
}

/**
 * @interface GreetingResponse
 * @description Defines the API response structure for the greeting endpoint.
 * This includes the message content and all necessary styling parameters
 * required by the frontend to render the component correctly.
 */
export interface GreetingResponse {
  message: string;
  alignment: string;
  font: GreetingFont;
}
