import { AeronaveComercialCarga } from "../models/AeronaveComercialCarga.js";


test('deve criar uma aeronave comercial de carga com os atributos corretos', () => {
  const aeronave = new AeronaveComercialCarga('ABC123', 800, 10000, 'Cargo Airlines', 50);
  
  expect(aeronave.prefixo).toBe('ABC123');
  expect(aeronave.velocidadeCruzeiro).toBe(800);
  expect(aeronave.autonomia).toBe(10000);
  expect(aeronave.companhiaAerea).toBe('Cargo Airlines');
  expect(aeronave.capacidadeCarga).toBe(50);
});

test('deve exibir detalhes corretamente', () => {
  const aeronave = new AeronaveComercialCarga('ABC123', 800, 10000, 'Cargo Airlines', 50);
  const detalhes = aeronave.exibirDetalhes();
  
  expect(detalhes).toBe('Aeronave ABC123 - Tipo: ComercialCarga, Velocidade de Cruzeiro: 800 km/h, Autonomia: 10000 km, Companhia Aérea: Cargo Airlines, Capacidade de Carga: 50 toneladas');
});
