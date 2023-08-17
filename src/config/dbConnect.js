import mongoose from "mongoose";
mongoose.connect('mongodb+srv://gabrieluagufrpe:<senha>@cluster0.zwdotjn.mongodb.net/<database>');

let db = mongoose.connection;

export default db;