const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router
  .get("/pessoas", PessoaController.pegaPessoasAtivas)
  .get("/pessoas/todos", PessoaController.pegaTodasAsPessoas)
  .get("/pessoas/:id", PessoaController.pegaUmaPessoa)
  .get("/pessoas/:estudanteId/matricula/:matriculaId",  PessoaController.pegaUmaMatricula)
  .get("/pessoas/:estudanteId/matricula", PessoaController.pegaMatriculas)
  .get("/pessoas/matricula/:turmaId/confirmadas", PessoaController.pegaMatriculasPorTurma)
  .post("/pessoas", PessoaController.criaPessoa)
  .post("/pessoas/:id/restaura", PessoaController.restauraPessoa)
  .put("/pessoas/:id", PessoaController.atualizaPessoa)
  .delete("/pessoas/:id", PessoaController.apagaPessoa)
  .post("/pessoas/:estudanteId/matricula", PessoaController.criaMatricula)
  .put("/pessoas/:estudanteId/matricula/:matriculaId",  PessoaController.atualizaMatricula)
  .delete("/pessoas/:estudanteId/matricula/:matriculaId",  PessoaController.apagaMatricula)
  .post("/pessoas/:id/restaura", PessoaController.restauraPessoa)
  .post("/pessoas/:estudanteId/matricula/:matriculaId/restaura", PessoaController.restauraMatricula);

module.exports = router;