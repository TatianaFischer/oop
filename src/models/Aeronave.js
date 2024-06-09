class Aeronave {
  constructor(prefixo, tipo, velocidadeCruzeiro, autonomia) {
    this.prefixo = prefixo;
    this.tipo = tipo;
    this.velocidadeCruzeiro = velocidadeCruzeiro;
    this.autonomia = autonomia;
  }

  exibirDetalhes() {
    return `Aeronave ${this.prefixo} - Tipo: ${this.tipo}, Velocidade de Cruzeiro: ${this.velocidadeCruzeiro} km/h, Autonomia: ${this.autonomia} km`;
  }
}

export default Aeronave;
