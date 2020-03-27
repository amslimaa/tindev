const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require("./routes");

const server = express();

mongoose.connect('mongodb://localhost:27017/omnistack8', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(cors());

server.use(express.json());

server.listen(3333);

server.use(routes);