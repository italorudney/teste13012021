# teste13012021
JOGO COBRAS E ESCADAS DESENVOLVIDO PARA TESTE EM JS DE EMPRESA BRASILEIRA

############################################################################

Regras do Jogo:
1. Existem dois jogadores e ambos começam fora do tabuleiro.

2. O jogador 1 começa e alterna sua vez com o jogador 2.

3. Um jogador deve jogar dois dados e somar sua posição atual ao valor da
soma dos dados sempre em ordem crescente, do 1 até o 100.
○ Exemplo: Caso um jogador esteja na casa 7 e o somatório dos dados
dá 6, ele deve ir até a casa 13;

4. Caso o valor de ambos os dados seja igual, o jogador atual ganha uma nova
jogada.
○ Exemplo, se o jogador 1 tira 5 no dado 1 e 5 no dado 2 estando na
casa 7, ele deve se dirigir à casa 17 e jogar novamente.

5. Caso um jogador pare em uma casa que é a base de uma escada, ele
obrigatoriamente deve subir até a casa em que está o topo da escada.

6. Caso um jogador pare em uma casa em que está localizada a cabeça de
uma cobra, ele vai obrigatoriamente deve descer até o casa onde está a
ponta da cauda da cobra.

7. Um jogador deve cair exatamente na última casa (100) para vencer o jogo.
O primeiro jogador a fazer isso, vence. Mas se o somatório dos dados com a
casa atual for maior que 100, o jogador deve se movimentar para trás até a
contagem terminar, como se ele tivesse batido em uma parede e retornasse.
○ Exemplo, se um jogador está na casa 98 e o somatório dos dados dá
5, o jogador deve se mover até a casa 100 (dois movimentos), e fazer
o retorno, caminhando para 99, 98 e 97 (três, quatro e cinco
movimentos.)

8. Se um jogador tirar dados iguais e chegar exatamente na casa 100 sem
movimentos restantes, então o jogador vence o jogo e não precisa jogar
novamente.
○ Exemplo, se um jogador está na casa 98 e o somatório dos dados dá
2 (1+1), ele ganha a segunda jogada. Mas como o primeiro
movimento o faz ficar na casa 100, ele vence o jogo e não precisa
jogar novamente.

############################################################################

Descrição da Implementação:

1. Sua tarefa é fazer uma simples classe chamada "CobrasEscadas".

2. Essa classe deve ter um método "jogar" que recebe as variáveis "dado1" e "dado2",
e que pode ser chamado independente do estado do jogo ou qual dos jogadores
está na vez.

3. As variáveis "dado1" e "dado2" são os valores dos dados jogados pelo jogador
naquele momento e ambos são inteiros entre 1 e 6. O jogador irá se mover
"dado1+dado2" casas na sua vez.

4. Retorne a frase "Jogador X Venceu!" quando um jogador for vitorioso. Onde X é um
jogador vitorioso que chegou na casa 100 sem nenhum movimento sobrando.

5. Retorne a frase "O jogo acabou!" se algum jogador já tiver vencido o jogo e o outro
jogador tentar chamar o método "jogar".

6. Em qualquer outro caso, retorne "Jogador X está na casa Y". Onde X é o jogador
atual e Y é a casa em que ele estará ao finalizar sua jogada

############################################################################

Como Rodar:

Para rodar o projeto baixar os dois arquivos e colocalos em mesmo diretorio no computador, acessar o arquivo cobrasEscadas.html em um browser e testar via interface simples criada com html basico.

OBS: Testado na versão 87.0.4280.88 do Google Chrome.
