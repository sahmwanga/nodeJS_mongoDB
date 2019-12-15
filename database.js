const mongoose = require("mongoose");

const _server = "127.0.0.1:27017";
// const server = "mongodb+srv://<username>:<password>@belpeocluster-28zxw.mongodb.net/test?retryWrites=true&w=majority"
const database = "belpeo";

class Database {
  constructor() {}

  __connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`)
      .then(() => {
        console.log("Database Connection established");
      })
      .catch(error => {
        console.error("Database connection error", error);
      });
  }
}

module.exports = new Database();
