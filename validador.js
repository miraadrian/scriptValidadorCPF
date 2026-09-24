// 705.484.450-52 && 070.987.720-03
/*

7   0  5  4  8  4  4  5  0
x   x  x  x  x  x  x  x  x
10  9  8  7  6  5  4  3  2
=   =  =  =  =  =  =  =  =
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (primeiro digito)
se o dígito for maior que 9, se considera 0

7   0  5  4  8  4  4  5  0  5
x   x  x  x  x  x  x  x  x  x
11 10  9  8  7  6  5  4  3  2
=  =   =  =  =  =  =  =  =  =
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (primeiro digito)
se o dígito for maior que 9, se considera 0

*/

function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        }
    })

}

ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfParc = this.cpfLimpo.slice(0, -2);
    const digito1 = this.validaDigito(cpfParc);
    const digito2 = this.validaDigito(cpfParc + digito1);

    const novoCPF = cpfParc + digito1 + digito2;

    return novoCPF === this.cpfLimpo;
}

ValidaCPF.prototype.validaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    let total = cpfArray.reduce((acm, val) =>{
        acm += (regressivo * Number(val));
        regressivo--;
        return acm;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);

};

ValidaCPF.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('705.484.350-52');

if(cpf.valida()) {
    console.log(`CPF Válido`)
} else {
    console.log(`CPF INVÁLIDO`)
}