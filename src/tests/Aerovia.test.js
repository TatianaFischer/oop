import { Aerovia } from '../models/Aerovia';

describe('Aerovia', () => {
  let aerovia;

  beforeEach(() => {
    aerovia = new Aerovia('123', 'Aeroporto Origem', 'Aeroporto Destino', 500);
  });

  test('deve criar uma instância da classe Aerovia corretamente', () => {
    expect(aerovia.id).toBe('123');
    expect(aerovia.aeroportoOrigem).toBe('Aeroporto Origem');
    expect(aerovia.aeroportoDestino).toBe('Aeroporto Destino');
    expect(aerovia.tamanho).toBe(500);
    expect(aerovia._altitudesOcupadas).toEqual({});
  });

  test('deve ocupar um slot de altitude corretamente', () => {
    aerovia.ocuparSlot('2023-06-24', '14:00', 35000);
    expect(aerovia._altitudesOcupadas['2023-06-24']['14:00']).toContain(35000);
  });

  test('deve verificar disponibilidade de um slot de altitude corretamente', () => {
    expect(aerovia.verificarDisponibilidade('2023-06-24', '14:00', 35000)).toBe(true);
    aerovia.ocuparSlot('2023-06-24', '14:00', 35000);
    expect(aerovia.verificarDisponibilidade('2023-06-24', '14:00', 35000)).toBe(false);
  });
});
