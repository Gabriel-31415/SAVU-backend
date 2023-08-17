import agendamentos from "../models/Agendamento.js";

class AgendamentoController {

	static listarAgendamentos = async ( req, res ) => {
		try {
			const agendamentosResultado = await agendamentos.find().populate( 'usuarios' ).exec();
			res.status(200).json(agendamentosResultado)
		} catch (err) {
			res.status(500).json(err.message);
		}
	}

	static listarAgendamentoPorId = async ( req, res ) => {
		let id = req.params.id;
		try {
			let agendamento = await agendamentos.findById( id ).populate( 'usuarios', 'nome' ).exec();
			res.status(200).json(Agendamento)		
		} catch (err) {
			res.status(400).json(err.message);
		}
		
	}

	static cadastrarAgendamento = async ( req, res ) => {
		let agendamento = new agendamentos( req.body );
		try {
			const novoAgendamento = await agendamento.save();
			res.status(200).json(novoAgendamento)		
		} catch (err) {
			res.status(500).json(err.message);
		}
	}

	static atualizarAgendamento = async ( req, res ) => {
		let id = req.params.id;
		try {
			let agendamento = await agendamentos.findOneAndUpdate( { _id: id }, { $set: req.body}, {
				new: true
			});
			res.status(200).json(agendamento)		
		} catch (err) {
			res.status(500).json(err.message);
		}
		
	}

	static deletarAgendamento = async ( req, res ) => {
		let id = req.params.id;
		try {
			let agendamento = await agendamentos.findByIdAndDelete( id );
			res.status(200).json(agendamento)		
		} catch (err) {
			res.status(500).json(err.message);
		}
	}
}

export default AgendamentoController;