$('.nav a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset - 100
    }, 500);
});

function cadastrar() {
    var nome = document.getElementById("nomeid");
    var email = document.getElementById("emailid");
    var nascimento = document.getElementById("nascimentoid");
    var telefone = document.getElementById("telefoneid");

    document.getElementById("nome1").innerText = nome.value;
    document.getElementById("email1").innerText = email.value;
    document.getElementById("nascimento1").innerText = nascimento.value;
    document.getElementById("telefone1").innerText = telefone.value;
}