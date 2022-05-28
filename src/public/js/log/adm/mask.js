$(document).ready(function(){
    $('#input-data-nascimento').mask('00/00/0000', {placeholder: '__/__/____'});
    $('#input-cpf').mask('000.000.000-00', {reverse: true, placeholder: '___.___.___-__'});
    $('.input-telefone').mask('(00) 00000-0000');
    $('#input-cep').mask('00000-000', {reverse: true});
    $('#input-estado').mask('AA', {placeholder: '__'});
})