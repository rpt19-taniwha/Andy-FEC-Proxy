const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');

const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', createProxyMiddleware({ target: 'http://localhost:8080', changeOrigin: true }));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Listening on port ${port}`));