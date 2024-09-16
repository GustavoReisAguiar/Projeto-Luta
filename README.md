## PROJETO LUTA 

Este é um jogo simples de combate entre personagens e monstros, onde você pode escolher entre diferentes personagens e enfrentar inimigos em uma batalha de turnos. O projeto utiliza HTML, CSS e JavaScript para criar uma interface de jogo interativa com um sistema básico de combate.


## Funcionalidades

- Personagens jogáveis com diferentes atributos de vida, ataque e defesa.
- Sistema de combate entre personagens e monstros.
- Log de mensagens exibindo as ações e resultados das batalhas.
- Batalhas em turnos, com a possibilidade de atacar e defender.

## Tecnologias Utilizadas

- **HTML**: Para estruturar a interface do jogo.
- **CSS**: Para estilizar o jogo e dar formato aos elementos, como barras de vida e botões.
- **JavaScript**: Para a lógica de combate, controle dos personagens e interação do usuário.

## Como Funciona

1. Escolha um personagem (cavaleiro ou mago) para lutar contra monstros de diferentes níveis (pequeno monstro ou grande monstro).
2. Clique no botão **Atacar** para realizar um ataque contra o inimigo.
3. O sistema calcula o ataque e a defesa de ambos os personagens e atualiza a barra de vida e o log de combate.
4. O jogo termina quando a vida de um dos combatentes chega a zero.

### Classes de Personagens

- **Cavaleiro**: Alta defesa, vida elevada e ataque moderado.
- **Feiticeiro**: Ataque poderoso, mas com pouca defesa e vida.

### Monstros

- **Pequeno Monstro**: Vida baixa, mas com um ataque forte.
- **Grande Monstro**: Vida elevada, ataque forte e boa defesa.

## Estrutura do Projeto

- `index.html`: Arquivo principal que contém a estrutura HTML.
- `style.css`: Arquivo de estilos que define a aparência do jogo.
- `classes.js`: Arquivo que contém as classes dos personagens, monstros e a lógica do jogo.
- `luta.js`: Script que inicializa os personagens e define o estágio da batalha.

## Como Jogar

1. Clone o repositório:

   
    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```
2. Abra o arquivo `index.html` em seu navegador.
3. Escolha seu personagem e inicie a batalha clicando nos botões de ataque.

## Exemplo de Código

```javascript
let log = new Log(document.querySelector('.log'))
let char = new Soucerer('Mago')
let monster = new LittleMonster()

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)
stage.start()
