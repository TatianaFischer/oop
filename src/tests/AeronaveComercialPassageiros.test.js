import { AeronaveComercialPassageiros } from "../models/AeronaveComercialPassageiros.js";


test('deve criar uma aeronave comercial de passageiros com os atributos corretos', () => {
  const aeronave = new AeronaveComercialPassageiros('ABC123', 800, 10000, 'Cargo Airlines', 190);
  
  expect(aeronave._prefixo).toBe('ABC123');
  expect(aeronave._velocidadeCruzeiro).toBe(800);
  expect(aeronave._autonomia).toBe(10000);
  expect(aeronave._companhiaAerea).toBe('Cargo Airlines');
  expect(aeronave._capacidadePassageiros).toBe(190);
});

test('deve exibir detalhes corretamente', () => {
  const aeronave = new AeronaveComercialPassageiros('ABC123', 800, 10000, 'Cargo Airlines', 190);
  const detalhes = aeronave.exibirDetalhes();
  
  expect(detalhes).toBe('Aeronave ABC123 - Tipo: ComercialPassageiros, Velocidade de Cruzeiro: 800 km/h, Autonomia: 10000 km, Companhia Aérea: Cargo Airlines, Capacidade de Passageiros: 190');
});
