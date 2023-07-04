// ################################################################################################

// Imports
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// My Imports
import logTime from '../lib/log_time.js';

// ################################################################################################

// Express Router
const router = express.Router();

// Route filename
const routeFilename = path.basename(fileURLToPath(import.meta.url), path.extname(fileURLToPath(import.meta.url)));

// ################################################################################################

// GET Request
router.get('/', (req, res) => {
  try {
    console.log(`${logTime()} Processing HTTP ${req.method} request for '${req.path}' with route '${routeFilename}'...`);
    res.status(200).render(routeFilename);
    res.end();
    console.log(`${logTime()} Completed HTTP ${req.method} request for '${req.path}' with route '${routeFilename}'`);
  } catch (error) {
    console.error(`${logTime()} Route '${routeFilename}' error...`, error.message);
    res.status(500).json({ error: `route ${routeFilename} error` });
    res.end();
  }
});

// ################################################################################################

// Exports
export default router;

// ################################################################################################
