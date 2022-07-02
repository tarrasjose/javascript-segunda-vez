function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = (`Agora são ${hora}:${minuto}`)
    if( hora >= 0 && hora < 15) {
        img.src = 'dia.png'
        document.body.style.background = '#FCBE67'
    }
}