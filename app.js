const express = require('express');
const path = require('path');
const WebSocket = require('ws');

// Routes
var views = require('./routes/views.js');
const app = express();
const port = 8080;


/***** EXPRESS *****/
// Static Serving
app.use(express.static(path.join(__dirname, 'public')));

// Views
app.set('view engine', 'pug');
app.set('views', './views');

// Routes
app.use('/', views);

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

/***** WebSocket *****/
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  ws.on('message', (message) => {
    console.log('received', JSON.parse(message));
  });
  ws.send('Connected Sucessfully');
});
