// Conectar informações do botão desenvolvido no arquivo HTML
let botao = document.getElementById('up-button');

// Função nativa do windows chamada onscroll ao scrollar, armazena a função chamada scrollFunction(), que define quando o botão deve aparecer
window.onscroll = function scrollFunction () {
  // Se, a quantidade de pixels percorridos na tela for igual à condição passada entre parentêses, então:
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // mostrar o botão
    botao.style.display = "block";
    // senão,
  } else {
    // não mostrar o botão 
    botao.style.display = "none";
  }
}

// Quando a pessoa clicar em voltar para o topo, executar esta função
function upArrow() {
  document.documentElement.scrollTop = 0;
}