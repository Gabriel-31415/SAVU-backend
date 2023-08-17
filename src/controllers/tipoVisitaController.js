import tipoVisitas from "../models/TipoVisita.js";

class TipoVisitaController {

	static listarTipoVisitas = async ( req, res ) => {
		try {
			const tipoVisitasResultado = await tipoVisitas.find();
			res.status(200).json(tipoVisitasResultado)
		} catch (err) {
			res.status(500).json(err.message);
		}
	}

	static listarTipoVisitaPorId = async ( req, res ) => {
		let id = req.params.id;
		try {
			let tipoVisita = await tipoVisitas.findById( id );
			res.status(200).json(tipoVisita)		
		} catch (err) {
			res.status(400).json(err.message);
		}
		
	}

	static cadastrarTipoVisita = async ( req, res ) => {
		let tipoVisita = new tipoVisitas( req.body );
		try {
			const novoTipoVisita = await tipoVisita.save();
			res.status(200).json(novoTipoVisita)		
		} catch (err) {
			res.status(500).json(err.message);
		}
	}

	static atualizarTipoVisita = async ( req, res ) => {
		let id = req.params.id;
		try {
			let tipoVisita = await tipoVisitas.findOneAndUpdate( { _id: id }, { $set: req.body}, {
				new: true
			});
			res.status(200).json(tipoVisita)		
		} catch (err) {
			res.status(500).json(err.message);
		}
		
	}

	static deletarTipoVisita = async ( req, res ) => {
		let id = req.params.id;
		try {
			let tipoVisita = await tipoVisitas.findByIdAndDelete( id );
			res.status(200).json(tipoVisita)		
		} catch (err) {
			res.status(500).json(err.message);
		}
	}
}

export default TipoVisitaController;