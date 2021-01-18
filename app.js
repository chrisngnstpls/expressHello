const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const logger = require('./middle/logger.js')

/*
Initial exercise

let someUrl;
app.get('/', (req, res) => {
    console.log(req.url)
    console.log(req.ip)
    console.log(req.hostname)
    //myIp = req.ip;
    someUrl = req.url;
    res.send("url = " + someUrl);
    //res.send(myIp);
    //res.send('Hello World!')
})
*/

// Calling the console logger middleware located
app.use(logger);
//Calling the routing path for '/'
app.use('/', require('./routes/routes'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
