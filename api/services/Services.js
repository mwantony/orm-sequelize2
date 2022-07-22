const database = require("../models");

class Services {
  constructor(nomeDoModelo) {
    this.nomeDoModelo = nomeDoModelo;
  }

  async pegaTodosOsRegistros() {
    return await database[this.nomeDoModelo].findAll();
  }
  async pegaUmRegistro(id) {
    return await database[this.nomeDoModelo].findOne({ where: { id: id } });
  }
  async criaRegistro(dados) {
    await database[this.nomeDoModelo].create(dados);
  }
  async atualizaRegistro(dadosAtualizados, id, transacao = {}) {
    return await database[this.nomeDoModelo].update(
      dadosAtualizados,
      { where: { id: id } },
      transacao
    );
  }
  async atualizaRegistros(dadosAtualizados, where, transacao = {}) {
    return await database[this.nomeDoModelo].update(
      dadosAtualizados,
      { where: { ...where } },
      transacao
    );
  }
  async apagaRegistro(id) {
    return await database[this.nomeDoModelo].destroy({ where: { id: id } });
  }
  async restauraRegistro(id) {
    return await database[this.nomeDoModelo].restore({ where: { id: id } });
  }
}

module.exports = Services;
