$(document).ready(function () {

    $('.btn-edit').click(function (e) {

        e.preventDefault();

        $('.modal-title').empty();
        $('.modal-body').empty();
        $('.modal-footer').empty();
        $('.modal-title').append('Edição de contato');

        var url = "../model/view-contato.php";
        var dados = 'idContato=';
        dados += $(this).attr('id');

        $.ajax({
            type: 'POST',
            dataType: 'json',
            data: dados,
            url: url,
            success: function (dados) {

                for (var i = 0; i < dados.length; i++) {
                    let contato = `
        <form class="mt-3" id="edit-contato">
            <div class="form-group">
                <label>Nome do contato:</label>
                <input type="text" name="nomeContato" class="form-control" placeholder="" aria-describedby="helpId" value="`+dados[i].nomeContato+`">
            </div>
            <div class="form-group">
                <label>Endereço do contato:</label>
                <input type="text" name="enderecoContato" class="form-control" placeholder="" aria-describedby="helpId" value="`+dados[i].endereco+`">
            </div>

            <div class="form-group row">
                <div class="col-6">
                    <label>Telefone do contato:</label>
                    <input type="text" name="telefoneContato" class="form-control" placeholder=""
                           aria-describedby="helpId" value="`+dados[i].telefoneContato+`">
                </div>
                <div class="col-6">
                    <label>Celular do contato:</label>
                    <input type="text" name="celularContato" class="form-control" placeholder=""
                           aria-describedby="helpId" value="`+dados[i].celularContato+`">
                </div>
            </div>

            <div class="form-group">
                <label>Email do contato:</label>
                <input type="text" name="emailContato" class="form-control" placeholder="" aria-describedby="helpId" value="`+dados[i].emailContato+`">
            </div>
            <input type="hidden" name="idContato" value="`+dados[i].idContato+`">
            <button class="btn btn-outline-warning btn-update"><i class="mdi mdi-content-save"></i> Salvar</button>

        </form>
                    `;

                    $('.modal-body').append(contato);

                }

                $('#modalContato').modal('show');
                $('body').append('<script src="../controller/update-contato.js"></script>');
            }
        });
    });

});