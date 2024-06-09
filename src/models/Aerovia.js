class Aerovia {
  constructor(id, aeroportoOrigem, aeroportoDestino, tamanho) {
    this.id = id;
    this.aeroportoOrigem = aeroportoOrigem;
    this.aeroportoDestino = aeroportoDestino;
    this.tamanho = tamanho;
    this.altitudesOcupadas = {};
  }

  ocuparSlot(data, horario, altitude) {
    if (!this.altitudesOcupadas[data]) {
      this.altitudesOcupadas[data] = {};
    }
    if (!this.altitudesOcupadas[data][horario]) {
      this.altitudesOcupadas[data][horario] = [];
    }
    this.altitudesOcupadas[data][horario].push(altitude);
  }

  verificarDisponibilidade(data, horario, altitude) {
    if (!this.altitudesOcupadas[data] || !this.altitudesOcupadas[data][horario]) {
      return true;
    }
    return !this.altitudesOcupadas[data][horario].includes(altitude);
  }
}

export default Aerovia;
