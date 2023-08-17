import dias from "../models/Dia.js";

class DiaController {

	static listarDias = async ( req, res ) => {
		try {
			const diasResultado = await dias.find();
			res.status(200).json(diasResultado)
		} catch (err) {
			res.status(500).json(err.message);
		}
	}

	static listarDiaPorId = async ( req, res ) => {
		let id = req.params.id;
		try {
			let dia = await dias.findById( id );
			res.status(200).json(dia)		
		} catch (err) {
			res.status(400).json(err.message);
		}
		
	}

	static cadastrarDia = async ( req, res ) => {
		let dia = new dias( req.body );
		try {
			const novoDia = await dia.save();
			res.status(200).json(novoDia)		
		} catch (err) {
			res.status(500).json(err.message);
		}
	}

	static atualizarDia = async ( req, res ) => {
		let id = req.params.id;
		try {
			let dia = await dias.findOneAndUpdate( { _id: id }, { $set: req.body}, {
				new: true
			});
			res.status(200).json(dia)		
		} catch (err) {
			res.status(500).json(err.message);
		}
		
	}

	static deletarDia = async ( req, res ) => {
		let id = req.params.id;
		try {
			let dia = await dias.findByIdAndDelete( id );
			res.status(200).json(dia)		
		} catch (err) {
			res.status(500).json(err.message);
		}
	}
}

export default DiaController;