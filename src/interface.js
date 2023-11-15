"use strict";
class Conta {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroDaConta = numeroDaConta;
    }
}
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTansferencia = 0;
    }
    transferir(valor, destinatario) {
        destinatario.saldo += valor - (this.taxaTansferencia);
        return true;
    }
    ;
}
