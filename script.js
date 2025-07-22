function performSearch(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('searchInput').value;
    
    if (searchTerm.trim()) {
        // Simulação de pesquisa - aqui você pode integrar com uma API real
        alert(`Pesquisando por: "${searchTerm}"\n\nEsta é uma demonstração. Em uma aplicação real, isso seria conectado a um banco de dados ou API de pesquisa.`);
        
        // Limpar o campo de pesquisa
        document.getElementById('searchInput').value = '';
    }
}

// Adicionar animação suave ao scroll
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Efeito de fade-in ao carregar a página
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
