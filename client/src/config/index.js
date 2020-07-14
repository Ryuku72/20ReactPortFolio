const dbuser = 
//"heroku_07lhttrp" 
process.env.DB_USER ;
//"ryuku72";

const dbcode = 
//"42av2dqmnoqhqdrask0dvno704";
process.env.DB_PASS;
//"7201Ryuku";

const MONGODB_URI = `mongodb://${dbuser}:${dbcode}@ds263638.mlab.com:63638/heroku_07lhttrp`

module.exports = MONGODB_URI;