const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./api/api');
const errorhandler = require('errorhandler');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 4000

app.use(bodyParser.json());
app.use(cors('dev'));


app.use('/api',apiRouter);

app.use(errorhandler());

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})

module.exports = app;