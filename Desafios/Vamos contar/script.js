function contar(){
    let ini = document.getElementById('num1')
    let fim = document.getElementById('num2')
    let passo = document.getElementById('pas')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p == 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if(f > i) {
            for(let c = i; f >= c; c+=p  ) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            for(var c = i; c >= f; c-=p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += 'Fim! \u{1F3C1}'
    }
}
