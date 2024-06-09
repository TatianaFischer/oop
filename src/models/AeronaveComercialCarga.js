import Aeronave from './Aeronave.js';

class AeronaveComercialCarga extends Aeronave {
  constructor(prefixo, velocidadeCruzeiro, autonomia, companhiaAerea, capacidadeCarga) {
    super(prefixo, 'ComercialCarga', velocidadeCruzeiro, autonomia);
    this.companhiaAerea = companhiaAerea;
    this.capacidadeCarga = capacidadeCarga;
  }
}

export default AeronaveComercialCarga;
