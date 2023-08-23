import express from "express";
import usuarios from "./usuarioRoutes.js";
import visitas from "./visitaRoutes.js"
import dias from "./diaRoutes.js"
import horarios from "./horarioRoutes.js"
import tipoVisitas from "./tipoVisitaRoutes.js"
import agendamentos from "./agendamentoRoutes.js"
import login from "./loginRoutes.js"
import cors from 'cors'


const routes = ( app ) => {
	app.use(
		express.json(),
		cors(),
		usuarios,
		visitas,
		dias,
		horarios,
		tipoVisitas,
		agendamentos,
		login
	)
	app.route( '/' ).get( ( req, res ) => {

		res.status( 200 ).send( { titulo: "Curso de Node" } )
	} )

}

export default routes;