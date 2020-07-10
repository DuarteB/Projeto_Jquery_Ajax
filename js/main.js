function consultaCep() {
    const cep = document.getElementById('CEP').value;
    const res = document.getElementById('Resultado');
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    console.log(url);
    $.ajax({
        url: url,
        type: 'GET',
        success: function(response) {
            const { logradouro, complemento, bairro, localidade, uf, cep} = response;
            $(res).html(`${logradouro} ${complemento} - ${bairro}. ${localidade} - ${uf} .Cep: ${cep}`);
        },
    });
}
