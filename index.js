const express = require('express');
const app = express();
// Import Route
const metamaskRoute = require('./routes/metamask')

app.use(express.json());

// middleware
app.use('/metamask',metamaskRoute)

//connect to server
app.listen(3000, function() {
    console.log('Server Up and Running...')
})
