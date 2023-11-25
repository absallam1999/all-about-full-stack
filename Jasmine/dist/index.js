"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 5000;
// set endpoint
app.get('/api', function (req, res) {
    res.send("Hello, World.");
});
// check for port to avoid allready in user error testing
app.listen(port, function () { return console.log("Listening on port ".concat(port, "!")); });
exports.default = app;
