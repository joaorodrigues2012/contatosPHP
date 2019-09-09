$(document).ready(function () {

    $('.btn-del').click(function (e) {

        e.preventDefault();

        var dados = "idContato=";
        dados += $(this).attr('id');


        Swal.fire({
            title: 'Agenda',
            text: 'Você tem certeza que deseja excluir o registro?',
            type: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Desistir da exclusão',
            confirmButtonText: 'Confirmar a exclusão'
        }).then((result) => {
            if (result.value) {

                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    data: dados,
                    url: '../model/delete-contato.php',
                    success: function (dados) {

                        Swal.fire({
                            title: 'Agenda',
                            text: 'Exclusão efetuada com sucesso!',
                            type: 'success',
                            confirmButtonText: 'Feito!'
                        });

                        $('#conteudo').load('ctr-contato.html');
                    }
                });

            } else {

                Swal.fire({
                    title: 'Agenda',
                    text: 'Operação cancelada',
                    type: 'success',
                    confirmButtonText: 'Feito!'
                });

            }
        })


    })

});