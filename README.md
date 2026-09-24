# ​Script validador de CPF
Script desenvolvido em JavaScript para validar números de CPF de acordo com as regras matemáticas dos dígitos verificadores e re-utilizar em futuros projetos.
## 📌 Sobre
Base de validador de CPF feito em JS, verificando se:
- O CPF inserido não contém letras;
- Se ele não for vazio;
- Se ele não contém números repetidos em sequencia(ex: 111.111.111-11 ou 222.222.222-22)

E se ele é realmente é um CPF válido ou não utilizando a mesma lógica utilizado pelo governo federal: o cálculo dos dígitos verificadores (baseado em [mod-11](https://documentacao.senior.com.br/gestaoempresarialerp/5.10.3/menu_cadastros/conceito_calcmod11.htm)) .

### Ferramentas

- Git
- GitHub
- VS Code

### Como funciona o cálculo
Primeiro, ele retira os dois últimos números do CPF. No Script foi utilizado o CPF 705.484.450-52 como exemplo, ficando assim somente 705.484.450

Logo após, ele faz o cálculo dos dois dígitos verificadores baseando na seguinte lógica:

<img width="650" height="604" alt="image" src="https://github.com/user-attachments/assets/7b3d4914-1c48-4bc8-a252-b5893afd8e8b" />

E assim, ele valida se os dois digitos validadores batem com o do CPF inserido.

ref: 👉​[CpfCnpj](https://www.cpfcnpj.com.br/blog/validar-ou-consultar-cpf-qual-voce-precisa/)
