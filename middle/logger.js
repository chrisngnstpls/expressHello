const moment = require('moment');
const callsList = [0];

const logger = (req,res,next) => {

    console.log(`local url : ${req.url}, local time : ${moment().format()}, `);
    nextLog = (callsList.length) + 1;
    callsList.push(nextLog);
    console.log(`Number of calls made : ${nextLog}. `);
    next();
  };

  module.exports = logger;