// ################################################################################################

// My Imports
import logTime from '../lib/log_time.mjs';

// ################################################################################################

// Route - Index
export default function routeIndex(req, res) {
  try {
    console.log(`${logTime()} Processing HTTP ${req.method} request for '${req.path}' with 'get_index'...`);
    res.status(200).render('index');
    res.end();
    console.log(`${logTime()} Completed HTTP ${req.method} request for '${req.path}' with 'get_index'`);
  } catch (error) {
    console.error(`${logTime()} 'get_index' error...`, error.message);
    res.status(500).json({ error: `'get_index' error` });
    res.end();
  }
}

// ################################################################################################
