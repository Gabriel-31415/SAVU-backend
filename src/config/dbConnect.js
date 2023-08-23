import mongoose from "mongoose";
mongoose.connect('String do atlas');

let db = mongoose.connection;

export default db;