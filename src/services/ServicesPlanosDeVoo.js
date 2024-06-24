// Classe de serviço: ServicesPlanosDeVoo
// Esta classe é responsável por gerenciar os planos de voo
// Ela implementa métodos para submeter um novo plano de voo e listar planos de voo por ID

import { PlanoDeVoo } from '../models/PlanoDeVoo.js';

class ServicesPlanosDeVoo {
  constructor(servicesPilotos, servicesAeronaves, servicesAerovias) {
    this.planosDeVoo = [];
    this.servicesPilotos = servicesPilotos;
    this.servicesAeronaves = servicesAeronaves;
    this.servicesAerovias = servicesAerovias;
  }

  submeterPlanoDeVoo(matriculaPiloto, prefixoAeronave, data, horario, idAerovia, altitude) {
    const piloto = this.servicesPilotos.obterPilotoPorMatricula(matriculaPiloto);
    const aeronave = this.servicesAeronaves.obterAeronavePorPrefixo(prefixoAeronave);
    const aerovia = this.servicesAerovias.obterAeroviaPorId(idAerovia);

    if (!piloto.habilitacaoAtiva) {
      throw new Error('Piloto não habilitado.');
    }

    if (aeronave.autonomia < aerovia.tamanho * 1.1) {
      throw new Error('Aeronave não possui autonomia suficiente.');
    }

    if (
      (aeronave.tipo === 'ComercialPassageiros' && altitude < 28000) ||
      (aeronave.tipo === 'Particular' && (altitude < 25000 || altitude > 27000)) ||
      (aeronave.tipo === 'ComercialCarga' && (horario < 0 || horario > 6))
    ) {
      throw new Error('Altitude ou horário incompatível com o tipo de aeronave.');
    }

    if (!aerovia.verificarDisponibilidade(data, horario, altitude)) {
      throw new Error('Slot de horário ou altitude indisponível.');
    }

    const idPlano = this.planosDeVoo.length + 1;
    const planoDeVoo = new PlanoDeVoo(idPlano, matriculaPiloto, prefixoAeronave, data, horario, aerovia, altitude);

    this.planosDeVoo.push(planoDeVoo);

    const duracao = Math.ceil(aerovia.tamanho / aeronave.velocidadeCruzeiro);
    for (let i = 0; i < duracao; i++) {
      aerovia.ocuparSlot(data, horario + i, altitude);
      planoDeVoo.slotsOcupados.push(horario + i);
    }

    return idPlano;
  }

  listarPlanoPorId(id) {
    return this.planosDeVoo.find(plano => plano.id === id);
  }
}

export { ServicesPlanosDeVoo };
