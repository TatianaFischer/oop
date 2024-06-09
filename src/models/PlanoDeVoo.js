class PlanoDeVoo {
  /**
   * Construtor da classe PlanoDeVoo.
   * @param {number} id - Identificador único do plano de voo.
   * @param {string} matriculaPiloto - Matrícula do piloto responsável pelo plano de voo.
   * @param {string} prefixoAeronave - Prefixo da aeronave utilizada no plano de voo.
   * @param {string} data - Data do voo.
   * @param {string} horario - Horário de partida do voo.
   * @param {string} aerovia - Identificação da aerovia a ser utilizada.
   * @param {number} altitude - Altitude planejada para o voo.
   */
  constructor(
    id,
    matriculaPiloto,
    prefixoAeronave,
    data,
    horario,
    aerovia,
    altitude,
  ) {
    this.id = id;
    this.matriculaPiloto = matriculaPiloto;
    this.prefixoAeronave = prefixoAeronave;
    this.data = data;
    this.horario = horario;
    this.aerovia = aerovia;
    this.altitude = altitude;
    this.slotsOcupados = [];
    this.cancelado = false;
  }

  /**
   * Método para cancelar o plano de voo.
   * Define o atributo 'cancelado' como true.
   */

  cancelar() {
    this.cancelado = true;
  }
}

export { PlanoDeVoo };
