function TrocarDIA(botaoClicado){
    var botoes = []
    for (var i = 1; i <= 31; i++) {
        botoes.push("DIAbtn" + i);
    }
    var DIAPrincipal = document.getElementById("DIAPrincipal");
    
    for (var i = 0; i < botoes.length; i++) {
        var botao = document.getElementById(botoes[i]);

        if (botao == botaoClicado) {
        DIAPrincipal.innerHTML = botao.innerHTML;
        break;
        }
    }
}
function TrocarMES(botaoClicado){
    var botoes = [];
    for (var i = 1; i <= 12; i++) {
        botoes.push("MESbtn" + i);
    }
    var MESPrincipal = document.getElementById("MESPrincipal");

    for (var i = 0; i < botoes.length; i++) {
        var botao = document.getElementById(botoes[i]);

        if (botao == botaoClicado) {
        MESPrincipal.innerHTML = botao.innerHTML;
        break;
        }
    }
}
function TrocarAno(botaoClicado){
    var botoes = []
    for (var i = 1; i <= 124; i++) {
        botoes.push("ANObtn" + i);
    }
    var ANOPrincipal = document.getElementById("ANOPrincipal");
    
    for (var i = 0; i < botoes.length; i++) {
        var botao = document.getElementById(botoes[i]);

        if (botao == botaoClicado) {
        ANOPrincipal.innerHTML = botao.innerHTML;
        break;
        }
    }
}

function TrocarDDI(botaoClicado) {
    var botoes = ["DDIbtn1", "DDIbtn2", "DDIbtn3", "DDIbtn4", "DDIbtn5", "DDIbtn6", "DDIbtn7", "DDIbtn8"];
    var DDIPrincipal = document.getElementById("DDIPrincipal");

    for (var i = 0; i < botoes.length; i++) {
        var botao = document.getElementById(botoes[i]);

        if (botao == botaoClicado) {
        DDIPrincipal.innerHTML = botao.innerHTML;
        break;
        }
    }
}