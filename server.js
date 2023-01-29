// ################################################################################################

// Express-Template - A simple node.js express template
// Copyright (C) 2023  Daniel Bates

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

// ################################################################################################

// Imports
import cookieParser from 'cookie-parser';
import express from 'express';

// My Imports
import logTime from './lib/log_time.mjs';

// ################################################################################################

// Routes
import routeIndex from './routes/get_index.mjs';

// ################################################################################################

// Starting
console.log(`${logTime()} Server Starting`);
if (process.debugPort) console.log(`${logTime()} Debug on port ${process.debugPort}`);

// ################################################################################################

// Express
const app = express();
app.enable('trust proxy');
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(express.json());
app.use(express.static('./public'));
app.set('view engine', 'pug');

// ################################################################################################

// HTTP requests all
app.all('*', (req, res, next) => {
  console.log(`${logTime()} Received HTTP ${req.method} request for '${req.path}'`);
  next();
});

// HTTP request for index page
app.get('/', routeIndex);

// ################################################################################################

// Listen for HTTP requests
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`${logTime()} HTTP server started and listening to port ${port}`);
});

// ################################################################################################
