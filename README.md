Sistema utilizando HTML, CSS e JavaScript onde ocorre uma luta entre dois personagens.

Com a classe Character especifico os atributos que cada guerreiro terá, tais como ataque, defesa e vida. 
Após isto foi os objetos Knigth, Soucerer, LittleMonster e BigMonster que herdam os atributos de Character, porém com suas qualidades diferentes uns dos outros.
Foi criada a classe Stage onde existem os métodos: Start, Update e doAttack.
A classe doAttack cria a ação de atacar, com base no valor atribuido ao personagem e sua força de ataque. Porém para que não cause sempre os mesmos danos ao adversários, foi utilizado a classe Math.Random(). 
Este ataque causará mais ou menos danos dependendo do nivel de defesa de seu adversário que pode levar pouco dano ou até mesmo se defender de maneira 100% eficaz. 
A classe update se certifica de atualizar todas as atualizações de vida entre os dois combatentes para que possamos saber quem está ganhando.
A classe start foi responsavel por inserir eventos de clique nos botãos que criei no HTML, para que possamos controlar os ataques. 
Foi criada a classe Log que possui os atributos list(array) e listEl (elemento do HTML) os metodos addMessage e render. 
render fica responsavel por atualizar o HTML para mostrar as mensagens na lista addMessage adciona uma mensagem a lista e chama o método render para atualizar a exibição. 
Após isto o programa ficou quase pronto, bastou a criação de outro Script onde criei uma intancia da classe Log, criei os personagens que iriam batalhar entre si e a constante stage que era o cenario de batalha.
Pronto, o programa estava finalizado e bastou o comando "stage.start()", para que fosse iniciada a batalha emocionante entre os participantes.
