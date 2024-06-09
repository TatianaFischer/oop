class PlanoDeVoo {
  constructor(id, matriculaPiloto, prefixoAeronave, data, horario, aerovia, altitude) {
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

  cancelar() {
    this.cancelado = true;
  }
}

export default PlanoDeVoo;
