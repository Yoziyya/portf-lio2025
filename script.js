document.addEventListener('DOMContentLoaded', () => {
    // Função para verificar e aplicar a classe 'visible'
    const checkVisibility = () => {
        document.querySelectorAll('section').forEach(section => {
            const rect = section.getBoundingClientRect();
            // Adiciona a classe 'visible' se a seção estiver dentro da janela de visualização,
            // considerando um offset de 150px para iniciar a animação um pouco antes de aparecer completamente.
            // Você pode ajustar '150' para mudar o ponto de gatilho.
            if (rect.top < window.innerHeight - 150 && rect.bottom > 0) {
                section.classList.add('visible');
            } else {
                // Opcional: Remove a classe 'visible' se a seção sair da tela
                // Útil se você quiser que a animação possa ser refeita ao rolar para cima e para baixo
                section.classList.remove('visible');
            }
        });
    };

    // Executa a verificação uma vez ao carregar a página para elementos já visíveis
    checkVisibility();

    // Adiciona o evento de scroll para verificar a visibilidade ao rolar
    window.addEventListener('scroll', checkVisibility);

    // Opcional: Adiciona evento de resize para recalcular a visibilidade em caso de redimensionamento da janela
    window.addEventListener('resize', checkVisibility);

    // Opcional: Usando Intersection Observer para maior performance
    // Se você tiver muitas seções ou quiser uma solução mais moderna e performática,
    // considere usar a API Intersection Observer.
    // Esta parte do código está comentada, mas é uma alternativa poderosa.
    /*
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // Se você quiser remover a classe quando o elemento sair da tela
                entry.target.classList.remove('visible');
            }
        });
    }, {
        rootMargin: '0px 0px -150px 0px' // Ajuste este valor para controlar quando a animação dispara
    });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    */
});
