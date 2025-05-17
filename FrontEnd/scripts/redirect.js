window.onload = function() {
    var params = new URLSearchParams(window.location.search);
    var email = params.get('email');
    console.log('email: ', email);

    if (email == "cybelle.crane@fatec.sp.gov.br"){
        window.location.href = "professor/home-logado.html"
    } else {
        window.location.href = "aluno/home-logado.html"
    }
}