import express, { Request, Response } from 'express';
import cookieSession from 'cookie-session';
import { router } from './routes/loginRoutes';

const app = express();

// To support JSON-encoded bodies
// POST: {"name":"foo","color":"red"}  <-- JSON encoding
// add a middleware (so that express can parse request.body's json)
// Used to parse JSON bodies
// app.use(express.json());

// To support URL-encoded bodies
// POST: name=foo&color=red            <-- URL encoding
// Parse URL-encoded bodies
app.use(express.urlencoded());
// Note: Thbody-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request.

app.use(cookieSession({ keys: ['test'] }));

app.use(router);

app.listen(3000, () => {
  console.log('Listening on port 3000.');
});
