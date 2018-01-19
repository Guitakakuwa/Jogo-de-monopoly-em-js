class CasaTabuleiro {
    constructor (position) {
    this.position = position;
    }

    get Position () {
        return this._position;
    };

}

class Propriedade extends CasaTabuleiro {
    constructor (position, valorCompra, valorVenda, nome,statusHipoteca) {

        super(position);
        this.valorCompra = valorCompra;
        this.valorVenda = valorVenda;
        this.nome = nome;
        this.owner = "bank";
        this.statusHipoteca = false;
    }
    set nome (nome) {
        this._nome = nome;
    }
    get nome () {
        return this._nome;
    };

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
    constructor(position, valorCompra, valorVenda, nome, precoDaCasa, aluguelBase, aluguelPorCasa) {

        super (position, valorCompra, valorVenda, nome);
        this.precoDaCasa = precoDaCasa;
        this.nCasas = 0;
        this.aluguelBase = aluguelBase;
        this.aluguelPorCasa = aluguelPorCasa;

    }
    get aluguel () {
        return this.calculaAluguel();
    }
    calculaAluguel (dado) {
        if (statusHipoteca===true) {
        return (this.aluguelBase + (this.nCasas * this.aluguelPorCasa));
    } alert("Siga sem pagar! a propriedade está hipotecada!");
}
    addCasa (n) {
        this.nCasas = this.nCasas + n;
    }
    removeCasa (n) {
        this.nCasas = this.nCasas - n;
    }
}


class Companhia extends Propriedade {
    constructor(position, valorCompra, valorVenda, nome, multiplicador) {
        super (position, valorCompra, valorVenda, nome);
        this.multiplicador = multiplicador;

    }

    calculaAluguel(dado) {
        return (this.multiplicador * dado);
    }
}

class Evento extends CasaTabuleiro {
    constructor(position) {
        super(position);
    }

    acaoDoEvento(playerAtual){
        console.log("chamada a funcao do evento");
    }
}
