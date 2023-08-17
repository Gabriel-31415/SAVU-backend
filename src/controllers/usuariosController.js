import usuarios from "../models/Usuario.js";

class UsuarioController {

	static listarUsuarios = async ( req, res ) => {
		try {
			const usuariosResultado = await usuarios.find();
			res.status(200).json(usuariosResultado)
		} catch (err) {
			res.status(500).json(err);
		}
	}

	static listarUsuarioPorId = async ( req, res ) => {
		let id = req.params.id;
		try {
			let Usuario = await usuarios.findById( id );
			res.status(200).json(Usuario)		
		} catch (err) {
			res.status(400).json(err.message);
		}
		
	}

	static cadastrarUsuario = async ( req, res ) => {
		let Usuario = new usuarios( req.body );
		try {
			const novoUsuario = await Usuario.save();
			res.status(200).json(novoUsuario)		
		} catch (err) {
			res.status(500).json(err.message);
		}
	}

	static atualizarUsuario = async ( req, res ) => {
		let id = req.params.id;
		try {
			let Usuario = await usuarios.findOneAndUpdate( { _id: id }, { $set: req.body}, {
				new: true
			});
			res.status(200).json(Usuario)		
		} catch (err) {
			res.status(500).json(err.message);
		}
		
	}

	static deletarUsuario = async ( req, res ) => {
		let id = req.params.id;
		try {
			let Usuario = await usuarios.findByIdAndDelete( id );
			res.status(200).json(Usuario)		
		} catch (err) {
			res.status(500).json(err.message);
		}
	}
}

export default UsuarioController;