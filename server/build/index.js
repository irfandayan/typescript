"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const loginRoutes_1 = require("./routes/loginRoutes");
const app = (0, express_1.default)();
// To support JSON-encoded bodies
// POST: {"name":"foo","color":"red"}  <-- JSON encoding
// add a middleware (so that express can parse request.body's json)
// Used to parse JSON bodies
// app.use(express.json());
// To support URL-encoded bodies
// POST: name=foo&color=red            <-- URL encoding
// Parse URL-encoded bodies
app.use(express_1.default.urlencoded());
// Note: Thbody-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request.
app.use((0, cookie_session_1.default)({ keys: ['test'] }));
app.use(loginRoutes_1.router);
app.listen(3000, () => {
    console.log('Listening on port 3000.');
});
