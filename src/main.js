
// Importação das classes e serviços
// As classes representam entidades do domínio (como Piloto, Aeronave, Aerovia),
// enquanto os serviços gerenciam operações e manipulação de dados para essas entidades

import { Piloto } from './models/Piloto.js';
import { ServicesPilotos } from './services/ServicesPilotos.js';
import { AeroNaveParticular } from './models/AeroNaveParticular.js';
import { AeronaveComercialPassageiros } from './models/AeronaveComercialPassageiros.js';
import { AeronaveComercialCarga } from './models/AeronaveComercialCarga.js';
import { ServicesAeronaves  } from './services/ServicesAeronaves.js';
import { Aerovia } from './models/Aerovia.js';
import { ServicesAerovias } from './services/ServicesAerovias.js';
import { ServicesPlanosDeVoo } from './services/ServicesPlanosDeVoo.js';

// Instanciar serviços
// Aqui são instâncias dos serviços que gerenciam pilotos, aeronaves, aerovias e planos de voo
// Esses serviços seguem o princípio de responsabilidade única, gerenciando um conjunto específico de operações
const servicoPilotos = new ServicesPilotos();
const servicoAeronaves = new ServicesAeronaves();
const servicoAerovias = new ServicesAerovias();
const servicoPlanosDeVoo = new ServicesPlanosDeVoo(
  servicoPilotos,
  servicoAeronaves,
  servicoAerovias,
);

// Adicionar pilotos
// Uma das instâncias é a da classe Piloto e foi adicionado ao serviço de pilotos
// Isso demonstra a criação e gestão de objetos, um conceito central em programação orientada a objetos

const piloto1 = new Piloto('P001', 'João Silva', true);
servicoPilotos.adicionarPiloto(piloto1);

// Adicionar aeronaves
// Instâncias das subclasses de Aeronave (AeroNaveParticular, AeronaveComercialPassageiros, AeronaveComercialCarga)
// e foi adicionado ao serviço de aeronaves
const aeronave1 = new AeroNaveParticular('PRIV001', 700, 2000, 'Empresa X');
const aeronave2 = new AeronaveComercialPassageiros(
  'COM001',
  850,
  5000,
  'Companhia A',
  180,
);
const aeronave3 = new AeronaveComercialCarga(
  'CARG001',
  750,
  3000,
  'Companhia B',
  50,
);

servicoAeronaves.adicionarAeronave(aeronave1);
servicoAeronaves.adicionarAeronave(aeronave2);
servicoAeronaves.adicionarAeronave(aeronave3);

// Adicionar aerovias
const aerovia1 = new Aerovia('AR001', 'Aeroporto A', 'Aeroporto B', 1000);
const aerovia2 = new Aerovia('AR002', 'Aeroporto B', 'Aeroporto C', 1500);

servicoAerovias.adicionarAerovia(aerovia1);
servicoAerovias.adicionarAerovia(aerovia2);

// Submeter plano de voo
// Utiliza-se os serviços para submeter um plano de voo, verificando regras de negócio definidas
// O uso do try-catch é para lidar com possíveis exceções que podem ocorrer durante a submissão do plano

try {
  const idPlano = servicoPlanosDeVoo.submeterPlanoDeVoo(
    'P001',
    'PRIV001',
    '2024-06-08',
    10,
    'AR001',
    25000,
  );
  console.log(`Plano de voo aprovado com ID: ${idPlano}`);
} catch (error) {
  console.error(`Erro ao submeter plano de voo: ${error.message}`);
}

// Listar plano de voo por ID
// Obter e exibir um plano de voo específico utilizando seu ID
// Isso demonstra a recuperação de dados armazenados e a interação com os objetos do sistema

const plano = servicoPlanosDeVoo.listarPlanoPorId(1);
console.log(plano);
