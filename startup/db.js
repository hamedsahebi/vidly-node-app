const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

// module.exports = function() {
//   const db = config.get('db');


//   mongoose.connect(db)
//     .then(() => winston.info(`Connected to ${db}...`));
// }


module.exports = function() {
  const db = config.get('db');


  try{
  mongoose.connect(db,
    { useNewUrlParser: true, useUnifiedTopology: true },
    ()=>console.log("Mongoose is connected"))
  } catch(e) {
    console.log("could not connect");
  }
   
}