
# oop

<h4>Project to study OOP (Object-Oriented Programming)</h4>

<p> Programação Orientada a Objetos (POO) é um paradigma de programação que utiliza "objetos" para modelar partes do sistema que estamos construindo. Esses objetos são instâncias de "classes", que definem o comportamento e os estados possíveis de seus objetos. </p>

Vamos explorar os conceitos da POO utilizando as classes criadas nesse projeto chamadas de Aeronave e de AeronaveComercialPassageiros como exemplos.

<h4> Conceitos Fundamentais da POO </h4>
<li> Classe: Uma classe é uma definição ou um molde para criar objetos. Ela encapsula dados (atributos) e comportamentos (métodos) relacionados. </li>

<li>Objeto: Um objeto é uma instância de uma classe. Ele representa uma entidade concreta que possui estados e comportamentos definidos pela classe.</li>

<li>Herança: Herança é um mecanismo pelo qual uma classe pode herdar atributos e métodos de outra classe. A classe que herda é chamada de classe derivada (ou subclasse), e a classe que é herdada é chamada de classe base (ou superclasse). </li>

<li> Encapsulamento: Encapsulamento é a técnica de esconder os detalhes internos de um objeto e expor apenas o necessário. Isso é feito para proteger os dados do objeto e manter a integridade do seu estado. </li>

<li> Polimorfismo: Polimorfismo permite que objetos de diferentes classes sejam tratados como objetos de uma classe comum. Geralmente é alcançado através da herança e interfaces. </li>

<li>Abstração: Abstração é o processo de expor apenas os detalhes relevantes de um objeto, ocultando a complexidade desnecessária. </li>

<h4> Exemplo com Aeronave e AeronaveComercialPassageiros </h4>
Vamos examinar como esses conceitos se aplicam às classes Aeronave e AeronaveComercialPassageiros.

<b>Classe Base:</b> Aeronave (Primeiro, definimos a classe base Aeronave. Esta classe encapsula os atributos e métodos comuns a todas as aeronaves). </li>

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

<li>Classe: Aeronave define a estrutura e comportamento básico de uma aeronave. </li>
<li>Atributos: prefixo, tipo, velocidadeCruzeiro, autonomia.</li>
<li>Métodos: exibirDetalhes() que retorna uma string com os detalhes da aeronave.</li>
<li>Classe Derivada: AeronaveComercialPassageiros</li>

<b>Classe derivada: </b> Agora, criamos uma classe derivada AeronaveComercialPassageiros que herda da classe Aeronave e adiciona atributos específicos para aeronaves comerciais de passageiros.

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

<li>Herança: AeronaveComercialPassageiros estende Aeronave, usando a palavra-chave extends. Isso significa que ela herda todos os atributos e métodos da classe Aeronave. </li>
<li>Construtor: O construtor de AeronaveComercialPassageiros chama o construtor da superclasse (Aeronave) usando super(). Isso inicializa os atributos herdados e, em seguida, inicializa os atributos específicos (companhiaAerea, capacidadePassageiros). </li>
<li>Polimorfismo: O método exibirDetalhes() é sobrescrito na subclasse para incluir informações adicionais específicas das aeronaves comerciais de passageiros. A palavra-chave super é usada para chamar o método exibirDetalhes() da superclasse, e então adicionar mais detalhes. </li>
<li>Encapsulamento:
Os atributos de ambas as classes são definidos no construtor e não são diretamente acessíveis fora da classe. Em vez disso, métodos (como exibirDetalhes()) são fornecidos para acessar e manipular esses dados.

Encapsulamento é um dos quatro pilares da Programação Orientada a Objetos (POO). Ele se refere à prática de esconder os dados internos de um objeto e fornecer métodos para acessar e modificar esses dados de maneira controlada. Isso melhora a segurança e a integridade dos dados.

</li>

<li> Atributos Privados
Em JavaScript, não há uma maneira direta de definir atributos privados como em outras linguagens (embora desde o ES2020, existam campos privados usando #). Uma prática comum é prefixar os nomes dos atributos com um sublinhado (_). Isso é uma convenção que sinaliza aos desenvolvedores que esses atributos não devem ser acessados diretamente fora da classe.</li>

<li> Prefixo _
O prefixo _ é uma convenção amplamente usada em JavaScript para indicar que um atributo é privado ou protegido, mesmo que tecnicamente ele ainda possa ser acessado fora da classe. É uma prática comum para lembrar os desenvolvedores de não acessar esses atributos diretamente</li>

<li>Getters e Setters
Getters e setters são métodos especiais que permitem acessar (get) e modificar (set) os atributos privados de uma classe. Eles são usados para encapsular o acesso aos atributos e podem incluir lógica adicional, como validações.</li>

<li>Abstração
Ambas as classes abstraem a complexidade de uma aeronave real, expondo apenas os atributos e comportamentos relevantes para o domínio do problema (gerenciamento de aeronaves e planos de voo). </li>

<h4>Exemplo de Uso</h4>
Vamos ver como essas classes podem ser usadas em um exemplo:

main.js

```
import AeronaveComercialPassageiros from './models/AeronaveComercialPassageiros.js';

const aeronave1 = new AeronaveComercialPassageiros('ABC123', 850, 12000, 'Airline XYZ', 180);
console.log(aeronave1.exibirDetalhes());

```

Neste exemplo, criamos uma instância de AeronaveComercialPassageiros e chamamos o método exibirDetalhes() para exibir suas informações.

<h4>Conclusão</h4>
A POO é uma maneira poderosa de organizar e estruturar seu código. Utilizando conceitos como classes, herança, encapsulamento, polimorfismo e abstração, você pode criar sistemas modulares, reutilizáveis e fáceis de manter. No caso das classes Aeronave e AeronaveComercialPassageiros, vemos como a herança permite especializar comportamentos e atributos de uma classe base, mantendo um design claro e eficiente.

![image](https://github.com/TatianaFischer/oop/assets/63520464/af75248c-14fb-4ce6-b055-56934da4c207)


## Instalação

Certifique-se de ter o Node.js e npm instalados na sua máquina. Para instalar as dependências do projeto, execute o seguinte comando na raiz do projeto:

```bash
npm install
```
## Rodar projeto
```
npm start

```

## Rodar testes:
Utilizamos a lib Jest
```
npm test
```
