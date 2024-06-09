// Classe de serviço: ServicesPilotos
// Esta classe é responsável por gerenciar os pilotos disponíveis.
// Ela implementa métodos para adicionar, obter e listar pilotos.
class ServicesPilotos {
  constructor() {
    this.pilotos = [];
  }

  /**
   * Adiciona um piloto ao array de pilotos.
   * @param {Piloto} piloto - A instância do piloto a ser adicionada.
   */
  adicionarPiloto(piloto) {
    this.pilotos.push(piloto); // Array para armazenar os pilotos
  }

  /**
   * Obtém um piloto pela sua matrícula.
   * @param {string} matricula - A matrícula do piloto a ser obtido.
   * @returns {Piloto} - O piloto correspondente à matrícula.
   */
  obterPilotoPorMatricula(matricula) {
    return this.pilotos.find(piloto => piloto.matricula === matricula);
  }

  /**
   * Lista todos os pilotos armazenados.
   * @returns {Array} - O array de todos os pilotos.
   */
  listarPilotos() {
    return this.pilotos;
  }
}

export { ServicesPilotos };
