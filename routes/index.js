// ################################################################################################

// Imports
import express from 'express';

// My Imports
import logTime from '../lib/log_time.js';

// ################################################################################################

// Express
const router = express.Router();

// ################################################################################################

// Route - Index
router.get('/', (req, res) => {
  try {
    console.log(`${logTime()} Processing HTTP ${req.method} request for '${req.path}' with 'get_index'...`);
    res.status(200).render('index');
    res.end();
    console.log(`${logTime()} Completed HTTP ${req.method} request for '${req.path}' with 'get_index'`);
  } catch (error) {
    console.error(`${logTime()} Get index error...`, error.message);
    res.status(500).json({ error: 'Get Index error' });
    res.end();
  }
});

// ################################################################################################

// Exports
export default router;

// ################################################################################################
