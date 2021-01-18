const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path');

const logger = require('./middleware/logger.js')
//let someUrl;

// app.get('/', (req, res) => {
//     console.log(req.url)
//     console.log(req.ip)
//     console.log(req.hostname)
//     //myIp = req.ip;
//     someUrl = req.url;
//     res.send("url = " + someUrl);
//     //res.send(myIp);
//     //res.send('Hello World!')
// })


app.use(logger);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'pub')));
app.use('/api/members', require('./routes/api/members'))
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/// is this the real life?
