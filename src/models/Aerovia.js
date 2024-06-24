class Aerovia {
  /**
   * Construtor da classe Aerovia.
   * @param {string} id - Identificador único da aerovia.
   * @param {string} aeroportoOrigem - Nome do aeroporto de origem.
   * @param {string} aeroportoDestino - Nome do aeroporto de destino.
   * @param {number} tamanho - Tamanho da aerovia em quilômetros.
   */
  constructor(id, aeroportoOrigem, aeroportoDestino, tamanho) {
    this._id = id;
    this._aeroportoOrigem = aeroportoOrigem;
    this._aeroportoDestino = aeroportoDestino;
    this._tamanho = tamanho;
    this._altitudesOcupadas = {};
  }

  get id() {
    return this._id;
  }

  get aeroportoOrigem() {
    return this._aeroportoOrigem;
  }

  get aeroportoDestino() {
    return this._aeroportoDestino;
  }

  get tamanho() {
    return this._tamanho;
  }

  get altitudesOcupadas() {
    return this._altitudesOcupadas;
  }

  /**
   * Ocupa um slot de altitude em uma data e horário específicos.
   * @param {string} data - Data no formato 'YYYY-MM-DD'.
   * @param {string} horario - Horário no formato 'HH:mm'.
   * @param {number} altitude - Altitude a ser ocupada.
   */
  ocuparSlot(data, horario, altitude) {
    if (!this._altitudesOcupadas[data]) {
      this._altitudesOcupadas[data] = {};
    }
    if (!this._altitudesOcupadas[data][horario]) {
      this._altitudesOcupadas[data][horario] = [];
    }
    this._altitudesOcupadas[data][horario].push(altitude);
  }

  /**
   * Verifica a disponibilidade de um slot de altitude em uma data e horário específicos.
   * @param {string} data - Data no formato 'YYYY-MM-DD'.
   * @param {string} horario - Horário no formato 'HH:mm'.
   * @param {number} altitude - Altitude a ser verificada.
   * @returns {boolean} - Retorna true se a altitude estiver disponível, false caso contrário.
   */
  verificarDisponibilidade(data, horario, altitude) {
    if (!this._altitudesOcupadas[data] || !this._altitudesOcupadas[data][horario]) {
      return true;
    }
    return !this._altitudesOcupadas[data][horario].includes(altitude);
  }
}

export { Aerovia };
