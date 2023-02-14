async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = '';

    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPconvertida = await consultaCEP.json()
        if(consultaCEPconvertida.erro){
            throw Error('CEP nao existente');
        }

        var cidade =  document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = consultaCEPconvertida.localidade;
        logradouro.value = consultaCEPconvertida.logradouro;
        estado.value = consultaCEPconvertida.uf;
        bairro.value = consultaCEPconvertida.bairro;

        console.log(consultaCEPconvertida)
        return consultaCEPconvertida;
        }   catch(erro) {
            mensagemErro.innerHTML = `<p>CEP Invalido. Tente Novamente!</p>`
        console.log(erro)
    }
}

var cep = document.getElementById('cep')
cep.addEventListener('focusout',(() => {
    buscaEndereco(cep.value);
}))