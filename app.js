var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World (updated)!\n');
});

app.listen(8080, function () {
  console.log('listening on port 8080!');
});
