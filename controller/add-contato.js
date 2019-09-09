$(document).ready(function () {

    $('.btn-add').click(function (e) {

        e.preventDefault();

        var dados = $('#add-contato').serialize();
        var url = "../model/add-contato.php";

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: url,
            async: true,
            data: dados,
            success: function (dados) {
                if (dados.return == true) {
                    Swal.fire({
                        title: 'Agenda',
                        text: 'Cadastro feito com sucesso!',
                        type: 'success',
                        confirmButtonText: 'Feito!'
                    })
                } else {
                    Swal.fire({
                        title: 'Agenda',
                        text: dados.return,
                        type: 'error',
                        confirmButtonText: 'Tente novamente!'
                    })
                }
                $('#add-contato input').val('');
            }
        });

    });

});