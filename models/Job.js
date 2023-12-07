const mongoose = require('mongoose');
// const password = require('../secret');
require('dotenv').config()
const password = process.env.DB_PASSWORD;
mongoose.connect(`mongodb+srv://anujnegi157:${password}@jobcluster.5bjnghp.mongodb.net/?retryWrites=true&w=majority`,{
  // userNewUrlParser : true,
  // userCreateIndex : true, 
  // userUnifiedTopology : true,

  useNewUrlParser: true,
  useUnifiedTopology: true,

}).then(function(db){
  // console.log(db);
  console.log("connect to the database");
}).catch(function(err){
  console.log("error 1",err);
})

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  company: String,
  location: String,
  salary: Number,
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;


