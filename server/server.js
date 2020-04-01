const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '/../client/dist/')));

app.get('/listing/:productNumber', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '/../client/dist/'),
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));