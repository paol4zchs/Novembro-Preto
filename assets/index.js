// Função que calcula o progresso da página e atualiza a barra
function updateProgressBar() {
    // Calculando o total de pixels rolados da página
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // Calculando o total de pixels possíveis para rolar (tamanho total do documento - altura da janela)
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // Calculando a porcentagem do progresso
    const scrollPercentage = (scrollTop / documentHeight) * 100;

    // Atualizando a largura da barra de progresso
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = scrollPercentage + '%';
}

// Adicionando um ouvinte de evento para a rolagem da página
window.addEventListener('scroll', updateProgressBar);
