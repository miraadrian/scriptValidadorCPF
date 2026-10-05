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

class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpflimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    éSequencia(){
        return this.cpflimpo.charAt(0).repeat(this.cpflimpo.length) === this.cpflimpo;
    }

    geraNovoCPF(){
        const cpfSemDigito = this.cpflimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfSemDigito);
        const digito2 = this.geraDigito(cpfSemDigito + digito1);
        this.novoCPF = cpfSemDigito + digito1 + digito2;
    }

    geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let stringNumerica of cpfSemDigitos){
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida(){
        if(!this.cpflimpo) return false;
        if(typeof this.cpflimpo !== "string") return false;
        if(this.cpflimpo.length !== 11) return false;
        if(this.éSequencia()) return "CPF INVÁLIDO!";
        this.geraNovoCPF();

        if(this.novoCPF === this.cpflimpo){
            return "CPF VÁLIDO!"
        }else{
            return "CPF INVÁLIDO! VERIFIQUE OS NUMEROS E TENTE NOVAMENTE"
        }
    }
}


const cpf1 = new ValidaCPF('070.987.720-03');
// const cpf1 = new ValidaCPF('999.999.999-99');
console.log(cpf1.valida())