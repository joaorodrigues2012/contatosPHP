$(document).ready(function () {

    $('.add-contato').click(function () {
        $('#conteudo').load('add-contato.html')
    })

    $('.ctr-contato').click(function () {
        $('#conteudo').load('ctr-contato.html')
    })

    $('.dados-usuario').click(function () {
        $('#conteudo').load('edit-usuario.html')
    })
})