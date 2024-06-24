class Piloto {
  /**
   * Construtor da classe Piloto.
   * @param {string} matricula - Matrícula do piloto.
   * @param {string} nome - Nome do piloto.
   * @param {boolean} habilitacaoAtiva - Indica se a habilitação do piloto está ativa.
   */
  constructor(matricula, nome, habilitacaoAtiva) {
    this._matricula = matricula;
    this._nome = nome;
    this._habilitacaoAtiva = habilitacaoAtiva;
  }

  get matricula() {
    return this._matricula;
  }

  get nome() {
    return this._nome;
  }

  get habilitacaoAtiva() {
    return this._habilitacaoAtiva;
  }

  set habilitacaoAtiva(value) {
    this._habilitacaoAtiva = value;
  }
}

export { Piloto };
