const serverless = require('serverless-http');
const app = require('./app');

console.log("demo handler");

module.exports.app = serverless(app);
