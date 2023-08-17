import mongoose from "mongoose";

const horarioSchema = new mongoose.Schema(
	{
		id: { type: String },
		horario: { type: Date, default: Date.now },
		dia_id: { type: mongoose.Schema.Types.ObjectId, ref: 'dias', required: true },
	}
)

const horarios = mongoose.model( "horarios", horarioSchema )

export default horarios;