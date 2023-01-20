// ################################################################################################

// My Imports
// none;

// ################################################################################################

// Route - Index
export default function routeIndex(req, res) {
  try {
    console.log(`'get_index': HTTP ${req.method} request for '${req.path}' processing`);
    res.status(200).render('index');
    res.end();
    console.log(`'get_index': HTTP ${req.method} request for '${req.path}' completed`);
  } catch (error) {
    console.error(`'get_index': HTTP ${req.method} request for '${req.path}' failed`);
    console.error(`'get_index': error: ${error.message}`);
    console.error(error);
    res.status(500).send(`'get_index': error`);
    res.end();
  }
}

// ################################################################################################
