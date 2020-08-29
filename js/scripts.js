const modalOverlay = document.querySelector('.modal-overlay');
const modalMax = document.querySelector('.modal');
const cardsBootcamp = document.querySelectorAll('.card-bootcamp');

// seleção do card para adicionar a classe active e abrir o modal junto com seus respectivos IDs.
for (let cardBootcamp of cardsBootcamp) {
    cardBootcamp.addEventListener("click", () => {
        modalOverlay.classList.add('active')
        
        const bootcampId = cardBootcamp.getAttribute('id')

        modalOverlay.querySelector('iframe').src = `https://app.rocketseat.com.br/dashboard/${bootcampId}`;

    })
}

// Controle de maximizar e desmaximizar tamanho do iframe.
document.querySelector('.max-modal').addEventListener("click", () => {
    if (modalMax.classList.contains('maximize')) {
        modalMax.classList.remove('maximize')
    } else {
        modalMax.classList.add('maximize')
    }
});

// removendo a classe active e limpando o "src"
document.querySelector('.close-modal').addEventListener("click", () => {
    modalOverlay.classList.remove('active')
    modalMax.classList.remove('maximize')
    modalOverlay.querySelector( 'iframe' ).src = "" ;
});