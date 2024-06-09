import Aeronave from './Aeronave.js';

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

export default AeronaveComercialPassageiros;
