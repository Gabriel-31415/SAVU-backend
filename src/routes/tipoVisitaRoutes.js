import express from "express";
import TipoVisitaController from "../controllers/tipoVisitaController.js";

const router = express.Router();

router
	.get('/tipoVisitas', TipoVisitaController.listarTipoVisitas )
	.get('/tipoVisitas/:id', TipoVisitaController.listarTipoVisitaPorId )
	.post( '/tipoVisitas', TipoVisitaController.cadastrarTipoVisita )
	.put( '/tipoVisitas/:id', TipoVisitaController.atualizarTipoVisita )
	.delete( '/tipoVisitas/:id', TipoVisitaController.deletarTipoVisita )

export default router;