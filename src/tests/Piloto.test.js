import { Piloto } from '../models/Piloto.js';

describe('Piloto', () => {
  let piloto;

  beforeEach(() => {
    piloto = new Piloto('12345', 'John Doe', true);
  });

  test('deve criar uma instância da classe Piloto corretamente', () => {
    expect(piloto.matricula).toBe('12345');
    expect(piloto.nome).toBe('John Doe');
    expect(piloto.habilitacaoAtiva).toBe(true);
  });

  test('deve retornar a matrícula do piloto corretamente', () => {
    expect(piloto.matricula).toBe('12345');
  });

  test('deve retornar o nome do piloto corretamente', () => {
    expect(piloto.nome).toBe('John Doe');
  });

  test('deve retornar o estado da habilitação do piloto corretamente', () => {
    expect(piloto.habilitacaoAtiva).toBe(true);
  });
});
