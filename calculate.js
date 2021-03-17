function calculate(tipo, valor) {

    if (tipo === 'ação'){
        if (valor === 'c') {
            // limpar o visor de resultado
            document.getElementById('resultado').value = ''
        }

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor
        }

        if (valor === '=') {
            let valorCampo = document.getElementById('resultado').value
            document.getElementById('resultado').value = eval(valorCampo)
        }

    }else if (tipo === 'valor') {
        document.getElementById('resultado').value += valor
    }

}