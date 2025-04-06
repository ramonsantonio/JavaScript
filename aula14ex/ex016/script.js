function verificar() {
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpas')
    var res = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        window.alert('[ERRO] Faltam dados')
        res.innerHTML = 'Impossível contar'
    }else{
        res.innerHTML = `Contando:<br> `
        var inicio = Number(inicio.value)
        var fim = Number(fim.value)
        var passo = Number(passo.value)
        if (passo <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (inicio < fim) {
            //contagem crescente
            for(var c =inicio; c <= fim; c += passo){
                res.innerHTML += `${c} \u{1F449}`
            }
            
        } else {
            //contagem regressiva
            for (var c = inicio; c >= fim; c -= passo) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}` 
    }
    
}