import mongoose from "mongoose";

const diaSchema = new mongoose.Schema(
	{
		id: { type: String },
		date: { type: Date, default: Date.now },
	}
)

const dias = mongoose.model( "dias", diaSchema )

export default dias;

