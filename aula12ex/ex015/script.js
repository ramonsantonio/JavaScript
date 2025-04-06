function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifica os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Masculino'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menino.png')
            }
            else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'senhor.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Feminino'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menina.png')
            }
            else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'ajovem.png')

            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'Mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'senhora.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

        
} 