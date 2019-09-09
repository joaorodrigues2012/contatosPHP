$(document).ready(function () {

    $('tbody').empty();

    var url = '../model/ctr-contato.php';

    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: url,
        async: true,
        success: function (dados) {
            for (var i = 0; i < dados.length; i++) {
                let contato = `
                    <tr>
                <td class="text-center" width="5%">`+dados[i].idContato+`</td>
                <td class="text-center" width="40%">`+dados[i].nomeContato+`</td>
                <td class="text-center" width="20%">`+dados[i].telefoneContato+`</td>
                <td class="text-center" width="20%">`+dados[i].celularContato+`</td>
                <td class="text-center" width="15%">
                    <button id="`+dados[i].idContato+`" class="btn btn-outline-primary btn-sm btn-view" ><i class="mdi mdi-eye mdi-18px"></i></button>
                    <button id="`+dados[i].idContato+`" class="btn btn-outline-warning btn-sm btn-edit"><i class="mdi mdi-pencil mdi-18px"></i></button>
                    <button id="`+dados[i].idContato+`" class="btn btn-outline-danger btn-sm btn-del"><i class="mdi mdi-delete mdi-18px"></i></button>
                </td>
            </tr>
              `;
                $('tbody').append(contato);
            }
            $('body').append('<script src="../controller/view-contato.js"></script>');
            $('body').append('<script src="../controller/edit-contato.js"></script>');
            $('body').append('<script src="../controller/delete-contato.js"></script>');
        }
    })

});