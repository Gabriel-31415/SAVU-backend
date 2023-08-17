import express from "express";
import HorarioController from "../controllers/horarioController.js";

const router = express.Router();

router
	.get('/horarios', HorarioController.listarHorarios )
	.get('/horarios/:id', HorarioController.listarHorarioPorId )
	.post( '/horarios', HorarioController.cadastrarHorario )
	.put( '/horarios/:id', HorarioController.atualizarHorario )
	.delete( '/horarios/:id', HorarioController.deletarHorario )

export default router;