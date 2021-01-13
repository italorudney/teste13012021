var Jogo;
var funcoes = {

    numbersOnly: function (e) {
        var aKey;
        if (window.event)
            aKey = e.keyCode;
        else
            aKey = e.which;
        //if das teclas precionadas
        if (!(((aKey == 67) && (e.ctrlKey)) || ((aKey == 86) && (e.ctrlKey)) || (aKey == 8) || (aKey == 9) || (aKey == 13) || (aKey == 16) || (aKey == 17) || (aKey == 92)
                || ((aKey >= 96) && (aKey <= 105)) || ((aKey >= 48) && (aKey <= 57)) || ((aKey >= 37) && (aKey <= 40)) || ((aKey >= 112) && (aKey <= 123))))
        {
            return false;
        }
    },

    novoJogo: function (pNome1, pNome2) {
        if (pNome1 == "" || pNome2 == "") {
            alert("insira o nome dos jogadores");
            document.getElementById("jogo").style.display = "none";
            document.getElementById("inicio").style.display = "block";
            return false;
        } else {
            Jogo = new CobrasEscadas(pNome1, pNome2);
            document.getElementById("descricaoJogadores").innerText = Jogo.jogadorA.nome + " x " + Jogo.jogadorB.nome;
            document.getElementById("console").innerHTML = "";
            Jogo.atualizaPosicaoJogadores();
             document.getElementById("jogo").style.display = "block";
            document.getElementById("inicio").style.display = "none";
        }
    },
    montaConsole: function (pMensagem) {
        document.getElementById("console").innerHTML += pMensagem + "<br>";
    },
    montaCasasChave: function () {
        sessionStorage.setItem(2, 38);
        sessionStorage.setItem(7, 14);
        sessionStorage.setItem(8, 31);
        sessionStorage.setItem(15, 26);
        sessionStorage.setItem(16, 6);
        sessionStorage.setItem(21, 42);
        sessionStorage.setItem(28, 84);
        sessionStorage.setItem(36, 44);
        sessionStorage.setItem(46, 25);
        sessionStorage.setItem(49, 11);
        sessionStorage.setItem(51, 67);
        sessionStorage.setItem(62, 19);
        sessionStorage.setItem(64, 60);
        sessionStorage.setItem(71, 91);
        sessionStorage.setItem(87, 94);
        sessionStorage.setItem(89, 68);
        sessionStorage.setItem(92, 88);
        sessionStorage.setItem(95, 75);
        sessionStorage.setItem(99, 80);
    }

};


class CobrasEscadas {
    constructor(nomeA, nomeB) {
        sessionStorage.clear();
        funcoes.montaCasasChave();
        this.jogadorA = [];
        this.jogadorB = [];
        this.jogadorA.id = "A";
        this.jogoAtivo = "S";
        this.jogadorB.id = "B";
        this.jogadorA.nome = nomeA;
        this.jogadorB.nome = nomeB;
        this.jogadorA.posicao = 1;
        this.jogadorB.posicao = 1;
        this.vezAtual = this.jogadorA;
    }

    jogar(pDado1, pDado2) {
        if (this.jogoAtivo == "S") {
            if (pDado1 == "" || pDado2 == "") {
                alert("Informe o valor dos dois dados!!");
                return false;
            }
            var somaDados = parseInt(pDado1) + parseInt(pDado2);
            if (this.vezAtual.id == "A") {
                if (this.andar(somaDados)) {
                    if (pDado1 != pDado2) {
                        this.vezAtual = this.jogadorB;
                    } else {
                        funcoes.montaConsole(this.vezAtual.nome + " tirou dados repetidos e irá jogar novamente");
                    }
                }
            } else {
                if (this.andar(somaDados)) {
                    if (pDado1 != pDado2) {
                        this.vezAtual = this.jogadorA;
                    } else {
                        funcoes.montaConsole(this.vezAtual.nome + " tirou dados repetidos e irá jogar novamente");
                    }
                }
            }
            this.atualizaPosicaoJogadores();

        } else {
            alert("O jogo acabou!");
        }
    }
    dadoAleatorio(min, max) {
        min = Math.ceil(1);
        max = Math.floor(7);
        var dado1 = Math.floor(Math.random() * (max - min)) + min;
        var dado2 = Math.floor(Math.random() * (max - min)) + min;
        document.getElementById("dado1").value = dado1;
        document.getElementById("dado2").value = dado2;
        this.jogar(dado1, dado2);
    }
    atualizaPosicaoJogadores() {
        document.getElementById("posicaoJogadores").innerHTML = this.jogadorA.nome + " está na posição " + this.jogadorA.posicao + "<br>" + this.jogadorB.nome + " está na posição " + this.jogadorB.posicao;
        document.getElementById("vezAtual").innerHTML = " Vez de:" + this.vezAtual.nome;

    }
    andar(somaDados) {
        this.vezAtual.posicao += somaDados;
        if (this.vezAtual.posicao < 100) {
            funcoes.montaConsole(this.vezAtual.nome + " tirou " + somaDados + " nos dados e parou na casa de numero " + this.vezAtual.posicao);
            this.verificaCasaChave();
        } else if (this.vezAtual.posicao == 100) {
            this.jogoAtivo = "N"
            funcoes.montaConsole(this.vezAtual.nome + " tirou " + somaDados + " nos dados e parou na casa de numero " + this.vezAtual.posicao);
            funcoes.montaConsole("<b style='color:red;'>Parabens!!!! " + this.vezAtual.nome + " VENCEU O JOGO</b>");
            alert("Parabens " + this.vezAtual.nome + " você ganhou");
            return false;
        } else {
            funcoes.montaConsole(this.vezAtual.nome + " passou da casa 100 e vai voltar " + (this.vezAtual.posicao - 100) + " casas pois tirou " + somaDados + " nos dados");
            var somaVolta = this.vezAtual.posicao - 100;
            this.vezAtual.posicao = 100 - somaVolta;
            funcoes.montaConsole(this.vezAtual.nome + " ficou na casa " + this.vezAtual.posicao);
            this.verificaCasaChave();
        }
        return true;
    }

    verificaCasaChave() {
        if (sessionStorage.getItem(this.vezAtual.posicao) != null) {
            if (this.vezAtual.posicao < parseInt(sessionStorage.getItem(this.vezAtual.posicao))) {
                funcoes.montaConsole(this.vezAtual.nome + " subio em uma escada e foi para a casa " + sessionStorage.getItem(this.vezAtual.posicao));
            } else {
                funcoes.montaConsole(this.vezAtual.nome + " escorregou em uma cobra e foi para a casa " + sessionStorage.getItem(this.vezAtual.posicao));
            }
            this.vezAtual.posicao = parseInt(sessionStorage.getItem(this.vezAtual.posicao));
        }

    }

}



