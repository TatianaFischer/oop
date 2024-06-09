class Aerovia {
  /**
   * Construtor da classe Aerovia.
   * @param {string} id - Identificador único da aerovia.
   * @param {string} aeroportoOrigem - Nome do aeroporto de origem.
   * @param {string} aeroportoDestino - Nome do aeroporto de destino.
   * @param {number} tamanho - Tamanho da aerovia em quilômetros.
   */
  constructor(id, aeroportoOrigem, aeroportoDestino, tamanho) {
    this.id = id;
    this.aeroportoOrigem = aeroportoOrigem;
    this.aeroportoDestino = aeroportoDestino;
    this.tamanho = tamanho;
    this.altitudesOcupadas = {};
  }

  /**
   * Quanto que a aeronave Ocupa um slot de altitude em uma data e horário específicos.
   * @param {string} data - Data no formato 'YYYY-MM-DD'.
   * @param {string} horario - Horário no formato 'HH:mm'.
   * @param {number} altitude - Altitude a ser ocupada.
   */
  ocuparSlot(data, horario, altitude) {
    // Se a data ainda não existe no objeto altitudesOcupadas, cria uma nova entrada
    if (!this.altitudesOcupadas[data]) {
      this.altitudesOcupadas[data] = {};
    }
    // Se o horário ainda não existe no objeto altitudesOcupadas para a data específica, cria uma nova entrada
    if (!this.altitudesOcupadas[data][horario]) {
      this.altitudesOcupadas[data][horario] = [];
    }
    // Adiciona a altitude à lista de altitudes ocupadas para a data e horário especificados
    this.altitudesOcupadas[data][horario].push(altitude);
  }

  /**
   * Verifica a disponibilidade de um slot de altitude em uma data e horário específicos.
   * @param {string} data - Data no formato 'YYYY-MM-DD'.
   * @param {string} horario - Horário no formato 'HH:mm'.
   * @param {number} altitude - Altitude a ser verificada.
   * @returns {boolean} - Retorna true se a altitude estiver disponível, false caso contrário.
   */

  verificarDisponibilidade(data, horario, altitude) {
    // Se não há entradas para a data ou horário especificados, retorna true para dizer que está diponível o slot
    if (
      !this.altitudesOcupadas[data] ||
      !this.altitudesOcupadas[data][horario]
    ) {
      return true;
    }

    // Verifica se a altitude está ocupada na data e horário especificados
    return !this.altitudesOcupadas[data][horario].includes(altitude);
  }
}

export { Aerovia };
