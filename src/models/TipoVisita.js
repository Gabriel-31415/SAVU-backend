import mongoose from "mongoose";

const tipoVisitaSchema = new mongoose.Schema(
	{
		id: { type: String },
		nome: { type: String, required: true }
	}
)

const tipoVisitas = mongoose.model( "tipoVisitas", tipoVisitaSchema )

export default tipoVisitas;