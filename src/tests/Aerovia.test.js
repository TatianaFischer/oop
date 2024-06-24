import { Aerovia } from '../models/Aerovia.js';

describe('Aerovia', () => {
  let aerovia;

  beforeEach(() => {
    aerovia = new Aerovia('A1', 'Aeroporto Origem', 'Aeroporto Destino', 500);
  });

  test('deve criar uma instância da classe Aerovia corretamente', () => {
    expect(aerovia.id).toBe('A1');
    expect(aerovia.aeroportoOrigem).toBe('Aeroporto Origem');
    expect(aerovia.aeroportoDestino).toBe('Aeroporto Destino');
    expect(aerovia.tamanho).toBe(500);
    expect(aerovia.altitudesOcupadas).toEqual({});
  });

  test('deve ocupar um slot de altitude corretamente', () => {
    aerovia.ocuparSlot('2023-06-24', '14:00', 35000);
    expect(aerovia.altitudesOcupadas['2023-06-24']['14:00']).toContain(35000);
  });

  test('deve verificar disponibilidade de um slot de altitude corretamente', () => {
    aerovia.ocuparSlot('2023-06-24', '14:00', 35000);

    // Deve retornar false porque a altitude 35000 já está ocupada
    expect(aerovia.verificarDisponibilidade('2023-06-24', '14:00', 35000)).toBe(false);

    // Deve retornar true porque a altitude 36000 está disponível
    expect(aerovia.verificarDisponibilidade('2023-06-24', '14:00', 36000)).toBe(true);

    // Deve retornar true porque não há slots ocupados em '2023-06-25'
    expect(aerovia.verificarDisponibilidade('2023-06-25', '14:00', 35000)).toBe(true);
  });
});
