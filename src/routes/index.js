import express from "express";
import usuarios from "./usuarioRoutes.js";
import visitas from "./visitaRoutes.js"
import dias from "./diaRoutes.js"
import horarios from "./horarioRoutes.js"
import tipoVisitas from "./tipoVisitaRoutes.js"
import agendamentos from "./agendamentoRoutes.js"

const routes = ( app ) => {
	app.route( '/' ).get( ( req, res ) => {
		res.status( 200 ).send( { titulo: "Curso de Node" } )
	} )

	app.use(
		express.json(),
		usuarios,
		visitas,
		dias,
		horarios,
		tipoVisitas,
		agendamentos
	)
}

export default routes;