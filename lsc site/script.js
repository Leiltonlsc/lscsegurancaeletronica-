const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function showImage(index) {
    const offset = -index * 100; // Calcula a posição para mostrar a imagem atual
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Avança para a próxima imagem
    showImage(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Volta para a imagem anterior
    showImage(currentIndex);
});

showImage(currentIndex); // Mostra a primeira imagem no carregamento


