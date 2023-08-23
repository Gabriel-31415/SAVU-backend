import horarios from "../models/Horario.js";

class HorarioController {

	static listarHorarios = async ( req, res ) => {
		try {
			const HorariosResultado = await horarios.find().populate('dias').exec();
			res.status(200).json(HorariosResultado)
		} catch (err) {
			res.status(500).json(err.message);
		}
	}

	static listarHorarioPorId = async ( req, res ) => {
		let id = req.params.id;
		try {
			let horario = await horarios.findById( id );
			res.status(200).json(horario)		
		} catch (err) {
			res.status(400).json(err.message);
		}
		
	}

	static cadastrarHorario = async ( req, res ) => {
		let horario = new horarios( req.body );
		try {
			const novoHorario = await horario.save();
			res.status(200).json(novoHorario)		
		} catch (err) {
			res.status(500).json(err.message);
		}
	}

	static atualizarHorario = async ( req, res ) => {
		let id = req.params.id;
		try {
			let horario = await horarios.findOneAndUpdate( { _id: id }, { $set: req.body}, {
				new: true
			});
			res.status(200).json(horario)		
		} catch (err) {
			res.status(500).json(err.message);
		}
		
	}

	static deletarHorario = async ( req, res ) => {
		let id = req.params.id;
		try {
			let horario = await horarios.findByIdAndDelete( id );
			res.status(200).json(horario)		
		} catch (err) {
			res.status(500).json(err.message);
		}
	}
}

export default HorarioController;