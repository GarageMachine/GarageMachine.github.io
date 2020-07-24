//Cria a função a ser executada quando o documento está pronto
$(document).ready(function(){   
    $("#termos").click(function() {
        $("#ModalLongoExemplo").modal();
        document.getElementsByClassName('modal-lancamento')[0].style.display = 'none';
    });
    $(".esqueci").click(esquecitudo);

    $("#termosfechar").click(feche);

    $("#esquecifechar").click(feche);

    function feche() {
        document.getElementsByClassName('modal-lancamento')[0].style.display = 'block';
        $("#loginfechar").click();
        }
    
    function esquecitudo() {
        $("#esquecimodal").modal();
        document.getElementsByClassName('modal-lancamento')[0].style.display = 'none';
    }

});
