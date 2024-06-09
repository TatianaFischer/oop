# oop

Project to study OOP (Object-Oriented Programming)

Programação Orientada a Objetos (POO) é um paradigma de programação que utiliza "objetos" para modelar partes do sistema que estamos construindo. Esses objetos são instâncias de "classes", que definem o comportamento e os estados possíveis de seus objetos.

Vamos explorar os conceitos da POO utilizando as classes Aeronave e AeronaveComercialPassageiros como exemplos.

Conceitos Fundamentais da POO
Classe: Uma classe é uma definição ou um molde para criar objetos. Ela encapsula dados (atributos) e comportamentos (métodos) relacionados.

Objeto: Um objeto é uma instância de uma classe. Ele representa uma entidade concreta que possui estados e comportamentos definidos pela classe.

Herança: Herança é um mecanismo pelo qual uma classe pode herdar atributos e métodos de outra classe. A classe que herda é chamada de classe derivada (ou subclasse), e a classe que é herdada é chamada de classe base (ou superclasse).

Encapsulamento: Encapsulamento é a técnica de esconder os detalhes internos de um objeto e expor apenas o necessário. Isso é feito para proteger os dados do objeto e manter a integridade do seu estado.

Polimorfismo: Polimorfismo permite que objetos de diferentes classes sejam tratados como objetos de uma classe comum. Geralmente é alcançado através da herança e interfaces.

Abstração: Abstração é o processo de expor apenas os detalhes relevantes de um objeto, ocultando a complexidade desnecessária.

Exemplo com Aeronave e AeronaveComercialPassageiros
Vamos examinar como esses conceitos se aplicam às classes Aeronave e AeronaveComercialPassageiros.

Classe Base: Aeronave
Primeiro, definimos a classe base Aeronave. Esta classe encapsula os atributos e métodos comuns a todas as aeronaves.

models/Aeronave.js

```
class Aeronave {
  constructor(prefixo, tipo, velocidadeCruzeiro, autonomia) {
    this.prefixo = prefixo;
    this.tipo = tipo;
    this.velocidadeCruzeiro = velocidadeCruzeiro;
    this.autonomia = autonomia;
  }

  exibirDetalhes() {
    return `Aeronave ${this.prefixo} - Tipo: ${this.tipo}, Velocidade de Cruzeiro: ${this.velocidadeCruzeiro} km/h, Autonomia: ${this.autonomia} km`;
  }
}

export default Aeronave;

```

Classe: Aeronave define a estrutura e comportamento básico de uma aeronave.
Atributos: prefixo, tipo, velocidadeCruzeiro, autonomia.
Métodos: exibirDetalhes() que retorna uma string com os detalhes da aeronave.
Classe Derivada: AeronaveComercialPassageiros
Agora, criamos uma classe derivada AeronaveComercialPassageiros que herda da classe Aeronave e adiciona atributos específicos para aeronaves comerciais de passageiros.

models/AeronaveComercialPassageiros.js

```
import Aeronave from './Aeronave.js';

class AeronaveComercialPassageiros extends Aeronave {
  constructor(prefixo, velocidadeCruzeiro, autonomia, companhiaAerea, capacidadePassageiros) {
    super(prefixo, 'ComercialPassageiros', velocidadeCruzeiro, autonomia);
    this.companhiaAerea = companhiaAerea;
    this.capacidadePassageiros = capacidadePassageiros;
  }

  exibirDetalhes() {
    return `${super.exibirDetalhes()}, Companhia Aérea: ${this.companhiaAerea}, Capacidade de Passageiros: ${this.capacidadePassageiros}`;
  }
}

export default AeronaveComercialPassageiros;

```

Herança: AeronaveComercialPassageiros estende Aeronave, usando a palavra-chave extends. Isso significa que ela herda todos os atributos e métodos da classe Aeronave.
Construtor: O construtor de AeronaveComercialPassageiros chama o construtor da superclasse (Aeronave) usando super(). Isso inicializa os atributos herdados e, em seguida, inicializa os atributos específicos (companhiaAerea, capacidadePassageiros).
Polimorfismo: O método exibirDetalhes() é sobrescrito na subclasse para incluir informações adicionais específicas das aeronaves comerciais de passageiros. A palavra-chave super é usada para chamar o método exibirDetalhes() da superclasse, e então adicionar mais detalhes.
Encapsulamento
Os atributos de ambas as classes são definidos no construtor e não são diretamente acessíveis fora da classe. Em vez disso, métodos (como exibirDetalhes()) são fornecidos para acessar e manipular esses dados.

Abstração
Ambas as classes abstraem a complexidade de uma aeronave real, expondo apenas os atributos e comportamentos relevantes para o domínio do problema (gerenciamento de aeronaves e planos de voo).

Exemplo de Uso
Vamos ver como essas classes podem ser usadas em um exemplo:

main.js

```
import AeronaveComercialPassageiros from './models/AeronaveComercialPassageiros.js';

const aeronave1 = new AeronaveComercialPassageiros('ABC123', 850, 12000, 'Airline XYZ', 180);
console.log(aeronave1.exibirDetalhes());

```

Neste exemplo, criamos uma instância de AeronaveComercialPassageiros e chamamos o método exibirDetalhes() para exibir suas informações.

Conclusão
A POO é uma maneira poderosa de organizar e estruturar seu código. Utilizando conceitos como classes, herança, encapsulamento, polimorfismo e abstração, você pode criar sistemas modulares, reutilizáveis e fáceis de manter. No caso das classes Aeronave e AeronaveComercialPassageiros, vemos como a herança permite especializar comportamentos e atributos de uma classe base, mantendo um design claro e eficiente.

oop/
├── src/
│ ├── main.js
│ ├── models/
│ │ ├── Piloto.js
│ │ ├── AeroNaveParticular.js
│ │ ├── AeronaveComercialPassageiros.js
│ │ ├── AeronaveComercialCarga.js
│ │ ├── Aerovia.js
│ ├── services/
│ │ ├── ServicesPilotos.js
│ │ ├── ServicesAeronaves.js
│ │ ├── ServicesAerovias.js
│ │ ├── ServicesPlanosDeVoo.js
├── package.json
