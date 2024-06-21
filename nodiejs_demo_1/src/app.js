// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, AWS Lambda!');
});

app.listen(port, () => {
  console.log("UPdated");
  console.log(`Server is running on port ${port}`);
});
