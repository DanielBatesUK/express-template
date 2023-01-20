// ################################################################################################

// My Imports
// none;

// ################################################################################################

// Route - Index
export default function routeIndex(req, res) {
  try {
    console.log(`HTTP ${req.method} request for '${req.path}' as 'index' processing`);
    res.status(200).render('index');
    res.end();
    console.log(`HTTP ${req.method} request for '${req.path}' as 'index' completed`);
  } catch (error) {
    console.error(`HTTP ${req.method} request for '${req.path}' as 'index' failed`);
    console.error(`'index' error: ${error.message}`);
    console.error(error);
    res.status(500).send(`Index error`);
    res.end();
  }
}

// ################################################################################################
