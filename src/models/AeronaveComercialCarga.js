// Classe Derivada: AeronaveComercialCarga
// Essa classe herda os atributos da classe Aeronave e adiciona atributos específicos para aeronaves comerciais de carga como acapacidade de carga.
// O construtor de AeronaveComercialCarga chama o construtor da superclasse (Aeronave) usando super(). Isso inicializa os atributos herdados e, em seguida, inicializa os atributos específicos.

import { Aeronave } from './Aeronave.js';

class AeronaveComercialCarga extends Aeronave {
  /**
   * Construtor da classe AeronaveComercialCarga.
   * @param {string} prefixo - Prefixo da aeronave.
   * @param {number} velocidadeCruzeiro - Velocidade de cruzeiro da aeronave em km/h.
   * @param {number} autonomia - Autonomia da aeronave em km.
   * @param {string} companhiaAerea - Companhia aérea responsável pela aeronave.
   * @param {number} capacidadeCarga - Capacidade de carga da aeronave em toneladas.
   */
  constructor(
    prefixo,
    velocidadeCruzeiro,
    autonomia,
    companhiaAerea,
    capacidadeCarga,
  ) {
    super(prefixo, 'ComercialCarga', velocidadeCruzeiro, autonomia);
    this.companhiaAerea = companhiaAerea;
    this.capacidadeCarga = capacidadeCarga;
  }
}

export { AeronaveComercialCarga };
