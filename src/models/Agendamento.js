import mongoose from "mongoose";

const agendamentoSchema = new mongoose.Schema(
	{
		id: { type: String },
		user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'usuarios', required: true },
		visita_id: { type: mongoose.Schema.Types.ObjectId, ref: 'visitas', required: true },
		dia_id: { type: mongoose.Schema.Types.ObjectId, ref: 'dias', required: true }
	}
)

const agendamentos = mongoose.model( "agendamentos", agendamentoSchema )

export default agendamentos;

