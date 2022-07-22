const Services = require("./Services");
const database = require("../models");

class MatriculasServices extends Services {
  constructor() {
    super("Matriculas");
    this.nomeDoModelo = "Matriculas";
  }

  async pegaMatricula(matriculaId, estudanteId) {
    return await database[this.nomeDoModelo].findOne({
      where: {
        id: matriculaId,
        estudante_id: estudanteId,
      },
    });
  }
}

module.exports = MatriculasServices;
