function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'images/bebe-m.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'images/jovem-m.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'images/adulto-m.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'images/idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'images/bebe-f.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'images/jovem-f.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'images/adulto-f.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'images/idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        img.style.width = '250px'
        img.style.height = '250px'
        img.style.textAlign = 'center'
        img.style.padding = '10px'
    }
}