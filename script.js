// classe jogador
class Jogador {
    constructor(nome) {
        this.nome = nome;
        this._xp = 0;
        this.nivel = 1;
    }

    ganharXp(valor) {
        this._xp += valor;
        this.contarNivel();
    }

    contarNivel() {
        if (this._xp >= 300) this.nivel = 4;
        else if (this._xp >= 200) this.nivel = 3;
        else if (this._xp >= 100) this.nivel = 2;
        else this.nivel = 1;
    }
}

// classe questões
class questoes{
    constructor(pergunta, opcoes, resposta) {
        this.pergunta = pergunta;
        this.opcoes = opcoes;
        this.resposta = resposta;
    }

    validar(respostaUser) {
        return respostaUser === this.resposta;
    }
}