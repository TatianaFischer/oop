// Classe de serviço: ServicesAerovias
// Esta classe é responsável por gerenciar as aerovias disponíveis.
// Ela implementa métodos para adicionar, obter e listar aerovias.

class ServicesAerovias {
  constructor() {
    this._aerovias = [];
  }

  /**
   * Adiciona uma aerovia ao array de aerovias.
   * @param {Aerovia} aerovia - A instância da aerovia a ser adicionada.
   */
  adicionarAerovia(aerovia) {
    this._aerovias.push(aerovia);
  }

  /**
   * Obtém uma aerovia pelo seu ID.
   * @param {string} id - O ID da aerovia a ser obtida.
   * @returns {Aerovia} - A aerovia correspondente ao ID.
   */
  obterAeroviaPorId(id) {
    return this._aerovias.find(aerovia => aerovia.id === id);
  }

  /**
   * Lista todas as aerovias armazenadas.
   * @returns {Array} - O array de todas as aerovias.
   */
  listarAerovias() {
    return this._aerovias;
  }

  /**
   * Lista todas as aerovias entre dois aeroportos específicos.
   * @param {string} aeroportoOrigem - O aeroporto de origem.
   * @param {string} aeroportoDestino - O aeroporto de destino.
   * @returns {Array} - O array de aerovias entre os aeroportos especificados.
   */
  listarAeroviasEntreAeroportos(aeroportoOrigem, aeroportoDestino) {
    return this._aerovias.filter(
      aerovia =>
        aerovia.aeroportoOrigem === aeroportoOrigem &&
        aerovia.aeroportoDestino === aeroportoDestino
    );
  }
}

export { ServicesAerovias };
