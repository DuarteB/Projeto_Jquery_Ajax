
function consultaCep() {
    const adress = document.getElementById('adress').value;
    const res = document.getElementById('resultado');
    const url = `https://viacep.com.br/ws/${adress}/json/`;
    $.ajax({
        url: url,
        type: 'GET',
        success: function(response) {
            const { logradouro, complemento, bairro, localidade, uf, cep} = response;
            $(res).html(`${logradouro} ${complemento} - ${bairro}. ${localidade} - ${uf} .Cep: ${cep}`);
        },
    });
}

