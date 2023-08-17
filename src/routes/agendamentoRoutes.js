import express from "express";
import AgendamentoController from "../controllers/agendamentoController.js";

const router = express.Router();

router
	.get('/agendamentos', AgendamentoController.listarAgendamentos )
	.get('/agendamentos/:id', AgendamentoController.listarAgendamentoPorId )
	.post( '/agendamentos', AgendamentoController.cadastrarAgendamento )
	.put( '/agendamentos/:id', AgendamentoController.atualizarAgendamento )
	.delete( '/agendamentos/:id', AgendamentoController.deletarAgendamento )

export default router;