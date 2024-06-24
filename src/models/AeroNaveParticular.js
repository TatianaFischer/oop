// Classe Derivada: AeroNaveParticular
// Essa classe herda os atributos da classe Aeronave e adiciona atributos específicos para aeronaves particulares como a empresa de manutenção.
// O construtor de AeroNaveParticular chama o construtor da superclasse (Aeronave) usando super(). Isso inicializa os atributos herdados e, em seguida, inicializa os atributos específicos.

import { Aeronave } from './Aeronave.js';

class AeroNaveParticular extends Aeronave {
  constructor(prefixo, velocidadeCruzeiro, autonomia, empresaManutencao) {
    super(prefixo, 'Particular', velocidadeCruzeiro, autonomia);
    this._empresaManutencao = empresaManutencao;
  }

  // Getters
  get empresaManutencao() {
    return this._empresaManutencao;
  }

  // Setters
  set empresaManutencao(value) {
    this._empresaManutencao = value;
  }

    exibirDetalhes() {
    return `${super.exibirDetalhes()}, Empresa manutencao: ${this._empresaManutencao}`;
  }
}

export { AeroNaveParticular };
