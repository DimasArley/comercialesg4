const mongoose = require("mongoose");

const host = "localhost";
const port = "27017";
const db = "c4db";

exports.mongoConnect = () => {
    const mongoStrigConnection = `mongodb://${host}:${port}/${db}`;

    mongoose.connect(mongoStrigConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind
    (console,"Mongodb connection error"))

}