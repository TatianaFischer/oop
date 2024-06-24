// Classe de serviço: ServicesPilotos
// Esta classe é responsável por gerenciar os pilotos disponíveis.
// Ela implementa métodos para adicionar, obter e listar pilotos.
class ServicesPilotos {
  constructor() {
    this.pilotos = [];
  }

  adicionarPiloto(piloto) {
    this.pilotos.push(piloto);
  }

  obterPilotoPorMatricula(matricula) {
    return this.pilotos.find(piloto => piloto.matricula === matricula);
  }

  listarPilotos() {
    return this.pilotos;
  }
}

export { ServicesPilotos };
