function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = (`Agora são ${hora} horas. `)



    if( hora >= 6 && hora < 12) {
        img.src = 'dia.png'
        document.body.style.background = '#FCBE67'
        msg.innerHTML += 'Bom dia!' 
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#5F82E9'
        msg.innerHTML += 'Boa tarde!'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#000000'
        msg.innerHTML += 'Boa noite!'
        
    }
}
