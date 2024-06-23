// Classe Derivada: AeronaveComercialPassageiros
// Essa classe herda os atributos da classe Aeronave e adiciona atributos específicos para aeronaves comerciais de passageiros como a capacidade de passageiros.
// O construtor de AeronaveComercialPassageiros chama o construtor da superclasse (Aeronave) usando super(). Isso inicializa os atributos herdados e, em seguida, inicializa os atributos específicos.
import { AeronaveComercial } from './AeronaveComercial.js';

class AeronaveComercialPassageiros extends AeronaveComercial {
   /**
   * Construtor da classe AeronaveComercialPassageiros.
   * @param {string} prefixo - Prefixo da aeronave.
   * @param {number} velocidadeCruzeiro - Velocidade de cruzeiro da aeronave em km/h.
   * @param {number} autonomia - Autonomia da aeronave em km.
   * @param {string} companhiaAerea - Companhia aérea responsável pela aeronave.
   * @param {number} capacidadePassageiros - Capacidade de passageiros da aeronave.
   */
  constructor(prefixo, velocidadeCruzeiro, autonomia, companhiaAerea, capacidadePassageiros) {
    super(prefixo, velocidadeCruzeiro, autonomia, companhiaAerea);
    this._capacidadePassageiros = capacidadePassageiros;
  }

  // Getters
  get capacidadePassageiros() {
    return this._capacidadePassageiros;
  }

  // Setters
  set capacidadePassageiros(value) {
    this._capacidadePassageiros = value;
  }

  exibirDetalhes() {
    return `${super.exibirDetalhes()}, Capacidade de Passageiros: ${this.capacidadePassageiros}`;
  }
}

export { AeronaveComercialPassageiros };
