const flashcards = [
    { q: "Como se diz 'Pretender' em inglês?", a: "To intend (Pretend significa fingir!)" },
    { q: "Qual o passado de 'Go'?", a: "Went" },
    { q: "O que significa o jargão 'ASAP'?", a: "As Soon As Possible (O mais rápido possível)" }
];

let currentIndex = 0;
const card = document.getElementById('card');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');

function updateCard() {
    card.classList.remove('flipped');
    setTimeout(() => {
        questionEl.innerText = flashcards[currentIndex].q;
        answerEl.innerText = flashcards[currentIndex].a;
    }, 200);
}

function flipCard() {
    card.classList.toggle('flipped');
}

function nextCard() {
    currentIndex = (currentIndex + 1) % flashcards.length;
    updateCard();
}

function prevCard() {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    updateCard();
}

// Iniciar primeiro card
updateCard();
