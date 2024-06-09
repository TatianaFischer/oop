// Classe de serviço: ServicesAeronaves
// Esta classe é responsável por gerenciar as aeronaves disponíveis.
// Ela implementa métodos para adicionar, obter e listar aeronaves.
class ServicesAeronaves {
  constructor() {
    this.aeronaves = []; // Array para armazenar as aeronaves
  }

  /**
   * Adiciona uma aeronave ao array de aeronaves.
   * @param {Aeronave} aeronave - A instância da aeronave a ser adicionada.
   */
  adicionarAeronave(aeronave) {
    this.aeronaves.push(aeronave);
  }

  /**
   * Obtém uma aeronave pelo seu prefixo.
   * @param {string} prefixo - O prefixo da aeronave a ser obtida.
   * @returns {Aeronave} - A aeronave correspondente ao prefixo.
   */
  obterAeronavePorPrefixo(prefixo) {
    return this.aeronaves.find(aeronave => aeronave.prefixo === prefixo);
  }

  /**
   * Lista todas as aeronaves armazenadas.
   * @returns {Array} - O array de todas as aeronaves.
   */
  listarAeronaves() {
    return this.aeronaves;
  }
}

export { ServicesAeronaves };
