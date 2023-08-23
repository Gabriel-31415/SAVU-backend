import visitas from "../models/Visita.js";

class VisitaController {

	static listarVisitas = async ( req, res ) => {
		try {
			const VisitasResultado = await visitas.find().populate( 'tipoVisita' ).exec();
			res.status(200).json(VisitasResultado)
		} catch (err) {
			res.status(500).json(err.message);
		}
	}

	static listarVisitaPorId = async ( req, res ) => {
		let id = req.params.id;
		try {
			let visita = await visitas.findById( id );
			res.status(200).json(visita)		
		} catch (err) {
			res.status(400).json(err.message);
		}
		
	}

	static cadastrarVisita = async ( req, res ) => {
		let visita = new visitas( req.body );
		try {
			const novoVisita = await visita.save();
			res.status(200).json(novoVisita)		
		} catch (err) {
			res.status(500).json(err.message);
		}
	}

	static atualizarVisita = async ( req, res ) => {
		let id = req.params.id;
		try {
			let visita = await visitas.findOneAndUpdate( { _id: id }, { $set: req.body}, {
				new: true
			});
			res.status(200).json(visita)		
		} catch (err) {
			res.status(500).json(err.message);
		}
		
	}

	static deletarVisita = async ( req, res ) => {
		let id = req.params.id;
		try {
			let visita = await visitas.findByIdAndDelete( id );
			res.status(200).json(visita)		
		} catch (err) {
			res.status(500).json(err.message);
		}
	}
}

export default VisitaController;