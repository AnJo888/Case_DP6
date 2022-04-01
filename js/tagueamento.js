// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

// AVISO AOS NAVEGANTES
// Este foi o meu 1º contato com GA. Além disso, tenho muito pouca experiência com JS e praticamente nenhuma com HTML e tecnologias associadas...
// Regardless, sei pesquisar/programar e, penso, a solução atendeu o solicitado ;)

let m1 = document.getElementById('m1');
let m2 = document.getElementById('m2');
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');

m1.onclick = menuClicked;
m2.onclick = menuClicked;
b1.onclick = buttonClicked;
b2.onclick = buttonClicked;
b3.onclick = buttonClicked;

function menuClicked(e) {
    if (this.id === "m1") {
        ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
    } else {
        ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
    }
}

function buttonClicked(e) {
    let rotulo = "";
    if (this.id === "b1") {
        rotulo = "Lorem";
    } else if (this.id === "b2") {
        rotulo = "Ipsum";
    } else {
        rotulo = "Dolor";
    }
    ga('send', 'event', 'analise', 'ver_mais', rotulo);
}
