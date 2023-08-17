import express from "express";
import DiaController from "../controllers/diaController.js";

const router = express.Router();

router
	.get('/dias', DiaController.listarDias )
	.get('/dias/:id', DiaController.listarDiaPorId )
	.post( '/dias', DiaController.cadastrarDia )
	.put( '/dias/:id', DiaController.atualizarDia )
	.delete( '/dias/:id', DiaController.deletarDia )

export default router;