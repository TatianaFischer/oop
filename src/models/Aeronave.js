// Classe Base: Aeronave.
// Esta classe encapsula os atributos e métodos comuns a todas as aeronaves.
//Receberá o prefixo da aeronave, tipo da arenave que pode ser Comercial ou Particular, velocidade de cruzeiro e autonomia.
// A baixo da classe tem o método exibirDetalhes que exibe de maneira mais organizada as informações da aeronave.



class Aeronave {
  /**
   * Construtor da classe Aeronave.
   * @param {string} prefixo - Prefixo da aeronave.
   * @param {string} tipo - Tipo da aeronave (Comercial ou Particular).
   * @param {number} velocidadeCruzeiro - Velocidade de cruzeiro da aeronave em km/h.
   * @param {number} autonomia - Autonomia da aeronave em km.
   */
  constructor(prefixo, tipo, velocidadeCruzeiro, autonomia) {
    this._prefixo = prefixo;
    this._tipo = tipo;
    this._velocidadeCruzeiro = velocidadeCruzeiro;
    this._autonomia = autonomia;
  }

  // Getters
  get prefixo() {
    return this._prefixo;
  }

  get tipo() {
    return this._tipo;
  }

  get velocidadeCruzeiro() {
    return this._velocidadeCruzeiro;
  }

  get autonomia() {
    return this._autonomia;
  }

  // Setters
  set prefixo(value) {
    this._prefixo = value;
  }

  set tipo(value) {
    this._tipo = value;
  }

  set velocidadeCruzeiro(value) {
    this._velocidadeCruzeiro = value;
  }

  set autonomia(value) {
    this._autonomia = value;
  }

  /**
   * Método para exibir os detalhes da aeronave.
   * @returns {string} Detalhes formatados da aeronave.
   */
  exibirDetalhes() {
    return `Aeronave ${this.prefixo} - Tipo: ${this.tipo}, Velocidade de Cruzeiro: ${this.velocidadeCruzeiro} km/h, Autonomia: ${this.autonomia} km`;
  }
}

export { Aeronave };
