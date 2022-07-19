let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function numeros(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function naLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(numeros(num.value) && !naLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0) {
        alert('Adicione números antes de finalizar.')
    } else {
        let total = valores.length
        let soma = 0
        let maiorNum = valores[0]
        let menorNum = valores[0]
        let media = 0

        for(let pos in valores) {
            soma += valores[pos]

            if(valores[pos] > maiorNum) {
                maiorNum = valores[pos]
            }

            if(valores[pos] < menorNum){
                menorNum = valores[pos]
            }
        }
        
        media = soma/total


        res.innerHTML = ''
        res.innerHTML += `<p>Total de números: ${total}</p>`
        res.innerHTML += `<p>Soma: ${soma}</p>`
        res.innerHTML += `<p>Maior número: ${maiorNum}</p>`
        res.innerHTML += `<p>Menor números: ${menorNum}</p>`
        res.innerHTML += `<p>Média: ${media}</p>`
    }
}
