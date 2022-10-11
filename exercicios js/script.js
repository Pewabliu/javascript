function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 23
    msg.innerHTML= `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'pexels-yanuar-putut-widjanarko-2171643.jpg'

    }else if (hora >= 12 && hora < 18){
        img.src = 'pexels-anderson-martins-2386144.jpg'

    } else {
        img.srg ='exels-reynaldo-brigworkz-brigantty-771883.jpg'

    }


}
