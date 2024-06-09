class Piloto {
  /**
   * Construtor da classe Piloto.
   * @param {string} matricula - Matrícula do piloto.
   * @param {string} nome - Nome do piloto.
   * @param {boolean} habilitacaoAtiva - Indica se a habilitação do piloto está ativa.
   */
  constructor(matricula, nome, habilitacaoAtiva) {
    this.matricula = matricula;
    this.nome = nome;
    this.habilitacaoAtiva = habilitacaoAtiva;
  }
}

export { Piloto };
