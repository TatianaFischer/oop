// Classe Derivada: AeronaveComercialPassageiros
// Essa classe herda os atributos da classe Aeronave e adiciona atributos específicos para aeronaves comerciais de passageiros como a capacidade de passageiros.

import { Aeronave } from './Aeronave.js';

class AeronaveComercialPassageiros extends Aeronave {
  constructor(prefixo, velocidadeCruzeiro, autonomia, companhiaAerea, capacidadePassageiros) {
    super(prefixo, 'ComercialPassageiros', velocidadeCruzeiro, autonomia);
    this.companhiaAerea = companhiaAerea;
    this.capacidadePassageiros = capacidadePassageiros;
  }

  exibirDetalhes() {
    return `${super.exibirDetalhes()}, Companhia Aérea: ${this.companhiaAerea}, Capacidade de Passageiros: ${this.capacidadePassageiros}`;
  }
}

export { AeronaveComercialPassageiros };
