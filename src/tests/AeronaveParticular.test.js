import { AeroNaveParticular } from "../models/AeroNaveParticular.js";


test('deve criar uma aeronave particular com os atributos corretos', () => {
  const aeronave = new AeroNaveParticular('ABC123', 800, 10000, 'LX');
  
  expect(aeronave.prefixo).toBe('ABC123');
  expect(aeronave.velocidadeCruzeiro).toBe(800);
  expect(aeronave.autonomia).toBe(10000);
  expect(aeronave.empresaManutencao).toBe('LX');

});

test('deve exibir detalhes corretamente', () => {
  const aeronave = new AeroNaveParticular('ABC123', 800, 10000, 'LX', 50);
  const detalhes = aeronave.exibirDetalhes();
  
  expect(detalhes).toBe('Aeronave ABC123 - Tipo: Particular, Velocidade de Cruzeiro: 800 km/h, Autonomia: 10000 km, Empresa de Manutenção: LX');
});
