$("#cep").focusout(function(){
    //Início do Comando AJAX
    $.ajax({
        url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/unicode/',
        dataType: 'json',
        success: function(resposta){
            $("#logradouro").val(resposta.logradouro);
            $("#bairro").val(resposta.bairro);
            $("#numero").focus();
        }
    });
});
