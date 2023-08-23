import usuarios from "../models/Usuario.js";

class HorarioController {

	static login = async ( req, res ) => {
		let { email, senha } = req.body;
		try {
			const usuario = await usuarios.find({ email: email, senha: senha }).exec();
			res.status(200).json( usuario.length === 0 ? false : true )
		} catch (err) {
			res.status(500).json(err.message);
		}
	}
}

export default HorarioController;