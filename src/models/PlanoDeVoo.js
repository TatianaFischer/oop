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
  constructor(id, matriculaPiloto, prefixoAeronave, data, horario, aerovia, altitude) {
    this._id = id;
    this._matriculaPiloto = matriculaPiloto;
    this._prefixoAeronave = prefixoAeronave;
    this._data = data;
    this._horario = horario;
    this._aerovia = aerovia;
    this._altitude = altitude;
    this._slotsOcupados = [];
    this._cancelado = false;
  }

  get id() {
    return this._id;
  }

  get matriculaPiloto() {
    return this._matriculaPiloto;
  }

  get prefixoAeronave() {
    return this._prefixoAeronave;
  }

  get data() {
    return this._data;
  }

  get horario() {
    return this._horario;
  }

  get aerovia() {
    return this._aerovia;
  }

  get altitude() {
    return this._altitude;
  }

  get slotsOcupados() {
    return this._slotsOcupados;
  }

  get cancelado() {
    return this._cancelado;
  }

  cancelar() {
    this._cancelado = true;
  }
}

export { PlanoDeVoo };
