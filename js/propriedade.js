class CasaTabuleiro {
    constructor (position, nome) {
    this.position = position;
    this.nome = nome;
    }
    set nome (nome) {
        this._nome = nome;
    };
    get nome () {
        return this._nome;
    };

    get Position () {
        return this._position;
    };

}

class Propriedade extends CasaTabuleiro {
    constructor (position, valorCompra, nome, valorHipoteca) {

        super(position, nome);
        this.valorCompra = valorCompra;
        this.owner = "bank";
        this.statusHipoteca = false;

    }

    get valorHipoteca () {
        return this.valorHipoteca;
    }

    set owner (newOwner) {
        this._owner = newOwner;
    };
    get owner () {
        return this._owner;
    };
    /*set statusHipoteca() {
        this._statusHipoteca = statusHipoteca;
    }
    get statusHipoteca(){
        return this._statusHipoteca;
    }*/
    hipotecar() {
        statusHipoteca = true;
    }
    desipotecar () {
        statusHipoteca = false;
    }

}
class Terreno extends Propriedade {
    constructor(position, valorCompra, nome, precoDaCasa, aluguelBase, aluguelPorCasa, valorHipoteca, color) {

        super (position, valorCompra, nome, valorHipoteca);
        this.precoDaCasa = precoDaCasa;
        this.nCasas = 0;
        this.aluguelBase = aluguelBase;
        this.aluguelPorCasa = aluguelPorCasa;
        this.color = color;

    }
    get aluguel () {
        return this.calculaAluguel();
    }

    calculaAluguel (dado) {
        if (this.statusHipoteca===false) {
        return (this.aluguelBase + (this.nCasas * this.aluguelPorCasa));
    } else {
        alert("Siga sem pagar! a propriedade está hipotecada!");
        }
    }
    addCasa (n, casaAtual) {
        this.nCasas = this.nCasas + n;
        playerAtual.pay(casaAtual.precoDaCasa);
        updateScreenInfo();
    }
    removeCasa (n) {
        this.nCasas = this.nCasas - n;
    }
}


class Companhia extends Propriedade {
    constructor(position, valorCompra, nome, multiplicador, valorHipoteca) {
        super (position, valorCompra, nome, valorHipoteca);
        this.multiplicador = multiplicador;

    }

    calculaAluguel(dado) {
        return (this.multiplicador * dado);
    }
}

class Evento extends CasaTabuleiro {
    constructor(position, nome) {
        super(position, nome);
    }

    acaoDoEvento(){
        if (playerAtual.getPosition() === 18) {
            lucrosDividendos ();

        } else if (playerAtual.getPosition() === 24) {
            impostoDeRenda();

        } else if (playerAtual.getPosition() === 30) {
            sendToPrison();

        } else {
            SR();

        }

    }
}
