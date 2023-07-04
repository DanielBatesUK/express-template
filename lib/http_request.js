// ################################################################################################

// Imports
import got from 'got';

// My imports
import logTime from './log_time.js';

// ################################################################################################

// HTTP requests
export default async function httpRequest(options, expectStatusCode = 200) {
  try {
    // HTTP request for data
    console.log(`${logTime()} HTTP ${options.method} request sent to '${options.url}'`);
    const response = await got(options);
    // Validate response code
    if (expectStatusCode.toString().indexOf(response.statusCode.toString()) !== -1) {
      // Response good
      console.log(`${logTime()} HTTP ${options.method} request received from '${options.url}' with status code '${response.statusCode}'`);
      return response;
    }
    // Response bad
    throw Error(`HTTP ${options.method} request received from '${options.url}' with status code '${response.statusCode}': Expected:'${expectStatusCode}'`);
  } catch (error) {
    // Error
    console.error(`${logTime()} HTTP request error...`, error.message);
    return false;
  }
}

// ################################################################################################
