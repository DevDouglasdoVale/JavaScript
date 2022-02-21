function contar () {
    let ini = document.getElementById ('txti')
    let fim = document.getElementById ('txtf')
    let passo = document.getElementById ('txtp')
    let res = document.getElementById ('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        alert ('[Erro] Faltam dados a serem preenchidos')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number (ini.value) // Convertendo o tipo para numero
        let f = Number (fim.value)
        let p = Number (passo.value)

        for(let c = i; c <= f; c += p)  {
            res.innerHTML += `${c}`

        }
    }

}