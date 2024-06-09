import Aeronave from './Aeronave.js';

class AeronaveParticular extends Aeronave {
  constructor(prefixo, velocidadeCruzeiro, autonomia, empresaManutencao) {
    super(prefixo, 'Particular', velocidadeCruzeiro, autonomia);
    this.empresaManutencao = empresaManutencao;
  }
}

export default AeronaveParticular;
