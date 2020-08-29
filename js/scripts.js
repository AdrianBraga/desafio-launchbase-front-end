const modalOverlay = document.querySelector('.modal-overlay');
const cardsBootcamp = document.querySelectorAll('.card-bootcamp');

// seleção do card para adicionar a classe active e abrir o modal junto com seus respectivos IDs.
for (let cardBootcamp of cardsBootcamp) {
    cardBootcamp.addEventListener("click", () => {
        modalOverlay.classList.add('active')
        
        const bootcampId = cardBootcamp.getAttribute('id')

        modalOverlay.querySelector('iframe').src = `https://app.rocketseat.com.br/dashboard/${bootcampId}`;

    })
}

// removendo a classe active e limpando o "src"
document.querySelector('.close-modal').addEventListener("click", () => {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector( 'iframe' ).src = "" ;
});