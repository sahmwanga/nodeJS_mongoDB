const mongoose = require("mongoose");

const server = "";
const database = "";

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
