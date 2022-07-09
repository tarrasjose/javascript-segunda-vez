function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if( Number(fano.value) > ano || Number(fano.value) < 1900) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') 
        if(fsex[0].checked) {
            genero = 'homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem.menino.png')
            } else if ( idade < 59) {
                // adulto
                img.setAttribute('src', 'Homem.png' )
            } else {
                // idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem.png')
            } else if (idade < 59) {
                // adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        if (genero == 'Mulher') {
            
        res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`
        res.appendChild(img)
        } else {
            res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
            res.appendChild(img)
        }
        
    }

}