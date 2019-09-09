$(document).ready(function () {

    $('.btn-view').click(function (e) {

        e.preventDefault();

        $('.modal-title').empty();
        $('.modal-body').empty();
        $('.modal-footer').empty();

        var url = "../model/view-contato.php";
        var dados = 'idContato=';
        dados += $(this).attr('id');

        $.ajax({
            type: 'POST',
            dataType: 'json',
            data: dados,
            url: url,
            success: function (dados) {

                for (var i = 0; i < dados.length; i++){
                    let contato = `
                    <p>Endereço: `+dados[i].endereco+`</p>
                    <p>Telefone: `+dados[i].telefoneContato+`</p>
                    <p>Celular: `+dados[i].celularContato+`</p>
                    <p>Email: `+dados[i].emailContato+`</p>
                    `;

                    $('.modal-title').append(dados[i].nomeContato);
                    $('.modal-body').append(contato);

                }

                $('#modalContato').modal('show');

            }
        });
    });

});