import mongoose from "mongoose";

const visitaSchema = new mongoose.Schema(
	{
		id: { type: String },
		nome: { type: String, required: true },
		cpf: { type: String, required: true },
		telefone: { type: String, required: true },
		email: { type: String, required: true },
		descricao: { type: String, required: true },
		agendamento_id: { type: mongoose.Schema.Types.ObjectId, ref: 'agendamentos', required: true },
		tipo_visita_id: { type: mongoose.Schema.Types.ObjectId, ref: 'tipoVisitas', required: true },
	}
)

const visitas = mongoose.model( "visitas", visitaSchema )

export default visitas;