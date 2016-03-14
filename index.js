const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('index');
});

const server = http.Server(app);
server.listen(process.env.PORT || 3000, () => {
    console.log('server started');
});
