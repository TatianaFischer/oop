import { Aeronave } from './Aeronave.js';

class AeronaveComercial extends Aeronave {
  /**
   * Construtor da classe AeronaveComercial
   * @param {string} prefixo - Prefixo da aeronave
   * @param {number} velocidadeCruzeiro - Velocidade de cruzeiro da aeronave em km/h
   * @param {number} autonomia - Autonomia da aeronave em km
   * @param {string} companhiaAerea - Companhia aérea responsável pela aeronave
   */
  constructor(prefixo, tipo, velocidadeCruzeiro, autonomia, companhiaAerea) {
    super(prefixo, tipo, velocidadeCruzeiro, autonomia);
    this._companhiaAerea = companhiaAerea;
  }

  // Getters
  get companhiaAerea() {
    return this._companhiaAerea;
  }

  // Setters
  set companhiaAerea(value) {
    this._companhiaAerea = value;
  }

  exibirDetalhes() {
    return `${super.exibirDetalhes()}, Companhia Aérea: ${this.companhiaAerea}`;
  }
}

export { AeronaveComercial };
