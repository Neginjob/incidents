const mongoose = require("mongoose");

const URI =
  "mongodb+srv://wizards:vXFGCcIiX0mO1uEN@cluster0.j56m0.mongodb.net/midterm?retryWrites=true&w=majority";

module.exports = {
  async connect() {
    try {
      await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to database");
    } catch (err) {
      console.error("Failed to connect to database: ", err);
      process.exit(1);
    }
  },
};
