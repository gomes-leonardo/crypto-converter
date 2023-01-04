function handleCalculate(){
    let n1 = parseInt(document.querySelector('#input-').value)
    let operation = document.querySelector('select').value
    let result = document.querySelector('#total')

    switch (operation){
        case 'bitcoin':
            calculo =  n1 *  91.859,00
            result.innerHTML = calculo.toLocaleString('pt-BR');
            break
        case 'etherium':
            calculo =  n1 *  6.830,27
            result.innerHTML = calculo.toLocaleString('pt-BR');
            break
        case 'litecoin':
            calculo =  n1 *  413,36
            result.innerHTML = calculo.toLocaleString('pt-BR');
            break
        case 'cardano':
            calculo =  n1 *  1,45
            result.innerHTML = calculo.toLocaleString('pt-BR');
            break
        case 'tether':
            calculo =  n1 *  5,47
            result.innerHTML = calculo.toLocaleString('pt-BR');
            break
        case 'solana':
            calculo =  n1 *  72.79
            result.innerHTML = calculo.toLocaleString('pt-BR');
            break
        case 'xrp':
            calculo =  n1 *  1,89
            result.innerHTML = calculo.toLocaleString('pt-BR');
            break
        
    }
    
    
}