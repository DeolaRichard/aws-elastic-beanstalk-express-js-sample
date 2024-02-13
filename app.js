const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello, it is time to learn aws! we are on pipeline testing'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
