var marcadores = document.querySelectorAll("li[data-marcador]");

function ativaMenu(pagina) {
    var quantPaginas = document.querySelectorAll("section");
    var itensNavegacao = document.querySelectorAll(".menu, .btn-proxima-pagina");
    var hamburguer = document.querySelector(".hamburguer");

    itensNavegacao.forEach((itemNavegacao) => {
        if (pagina === 1 || pagina === quantPaginas.length){
            itemNavegacao.classList.add("esconde-item");
            hamburguer.classList.add("esconde-item");

        }else {
            itemNavegacao.classList.remove("esconde-item");
            hamburguer.classList.remove("esconde-item");
        }   
    });

    if (pagina === 3) {
        preencheConhecimento()
    }

    if (pagina === 6) {
        fixTimeline()
    }

    navegacao(pagina, quantPaginas);
}

function abreMenu() {
    document.querySelector("ul.menu").classList.add("menu-aberto");
}
function fechaMenu() {
    document.querySelector("ul.menu").classList.remove("menu-aberto");
}

function selecionaPagina(pagina) {
    document.querySelector("section.ativo").classList.remove("ativo");
    document.querySelector("section#pagina-"+pagina).classList.add("ativo");
    ativaMenu(pagina);
    var proximaPagina = pagina + 1;
    var setaProximaPagina = document.querySelector(".btn-proxima-pagina");
    setaProximaPagina.setAttribute("onclick","selecionaPagina(" + proximaPagina + ")");
    fechaMenu();
}

function preencheConhecimento(){
    var habilidades = document.querySelectorAll("div[data-conhecimento]");

    habilidades.forEach((habilidade) => {
        var anguloFinal = habilidade.dataset.conhecimento;
        setTimeout(function(){
            habilidade.querySelector('span').style.transform = "rotate("+ anguloFinal +"deg)";
        }, 3500);

    })

}

function navegacao(pagina, quantPaginas){
    for (let i=0; i<marcadores.length; i++){
        var marcadorAtivado = document.querySelectorAll("li[data-marcador='"+pagina+"']");

        marcadores.forEach((marcador) => {
            marcador.classList.remove("atual");
        });

        marcadorAtivado.forEach((marcador) => {
            marcador.classList.add("atual");
        });
        alternaImagemFundo(pagina, quantPaginas);
    }
}

function alternaImagemFundo(pagina, quantPaginas){
    var main = document.querySelector("main");
    var body = document.querySelector("body");

    if (pagina === quantPaginas.length) {
        main.classList.remove("overflow-hidden");
        body.classList.remove("sem-fundo");
        body.classList.add("fundo-ultima-pagina");
    }
    else if (pagina > 1 && pagina < quantPaginas.length) {
        main.classList.add("overflow-hidden");
        body.classList.add("sem-fundo");
    }
    else {
        main.classList.remove("overflow-hidden");
        body.classList.remove("sem-fundo");
        body.classList.remove("fundo-ultima-pagina");
    }
}

function fixTimeline(){
    var ultimo = document.querySelector(".itens-curso.ultimo");
    var linha = document.querySelector(".linha");

    ultimo.addEventListener("mouseenter",function(){
        linha.classList.add("linha-hover");
    });
    ultimo.addEventListener("mouseleave", function(){
        linha.classList.remove("linha-hover");
    });

}