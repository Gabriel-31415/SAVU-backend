import express from "express";
import VisitaController from "../controllers/visitaController.js";

const router = express.Router();

router
	.get( '/visitas', VisitaController.listarVisitas )
	.get( '/visitas/:id', VisitaController.listarVisitaPorId )
	.post( '/visitas', VisitaController.cadastrarVisita )
	.put( '/visitas/:id', VisitaController.atualizarVisita )
	.delete( '/visitas/:id', VisitaController.deletarVisita )

export default router;