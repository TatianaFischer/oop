import { PlanoDeVoo } from '../models/PlanoDeVoo.js';

describe('PlanoDeVoo', () => {
  let planoDeVoo;

  beforeEach(() => {
    planoDeVoo = new PlanoDeVoo(
      1,
      'P12345',
      'PR-ABC',
      '2023-06-24',
      '14:00',
      'AR123',
      35000
    );
  });

  test('deve criar uma instância da classe PlanoDeVoo corretamente', () => {
    expect(planoDeVoo.id).toBe(1);
    expect(planoDeVoo.matriculaPiloto).toBe('P12345');
    expect(planoDeVoo.prefixoAeronave).toBe('PR-ABC');
    expect(planoDeVoo.data).toBe('2023-06-24');
    expect(planoDeVoo.horario).toBe('14:00');
    expect(planoDeVoo.aerovia).toBe('AR123');
    expect(planoDeVoo.altitude).toBe(35000);
    expect(planoDeVoo.slotsOcupados).toEqual([]);
    expect(planoDeVoo.cancelado).toBe(false);
  });

  test('deve cancelar o plano de voo corretamente', () => {
    planoDeVoo.cancelar();
    expect(planoDeVoo.cancelado).toBe(true);
  });
});
