const calcular = (tipo, valor) => {
    if(tipo === 'acao') {
        switch(valor) {
            case 'c':
                document.getElementById('resultado').value = ''
                break

            case '+':
            case '-':
            case '*':
            case '/':
            case '.':
                document.getElementById('resultado').value += valor
                break
            
            case '=':
                var valor_campo = document.getElementById('resultado').value
                document.getElementById('resultado').value = eval(valor_campo)
                break
            
            default:
                document.getElementById('resultado').value = 0;
                break
        }
    }else if(tipo === 'numero') {
        document.getElementById("resultado").value += valor
    }else {
        document.getElementById('resultado').value = 0;
    }
}
