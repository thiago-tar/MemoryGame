document.addEventListener("DOMContentLoaded", () => {

    //card options
    const cardArray = [
        {
            name: "naruto",
            img: "images/naruto.jpg"
        },
        {
            name: "naruto",
            img: "images/naruto.jpg"
        },
        {
            name: "narutosplash",
            img: "images/narutosplash.jpg"
        },
        {
            name: "narutosplash",
            img: "images/narutosplash.jpg"
        },
        {
            name: "raposa9",
            img: "images/raposa9.jpg"
        },
        {
            name: "raposa9",
            img: "images/raposa9.jpg"
        },
        {
            name : "sasukedark",
            img : "images/sasukedark.jpg"
        },
        {
            name : "sasukedark",
            img : "images/sasukedark.jpg"
        },
        {
            name : "madara-uchiha",
            img : "images/madara-uchiha.jpg"
        },
        {
            name : "madara-uchiha",
            img : "images/madara-uchiha.jpg"
        },
        {
            name : "gaara",
            img : "images/gaara.jpg"
        },
        {
            name : "gaara",
            img : "images/gaara.jpg"
        },

    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    const deckImg = 'images/narutodeck.png'

    function createBoard () {
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', deckImg);
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);

            grid.appendChild(card);
        }
    }

    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if( cardsChosen[0] === cardsChosen[1]){
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/narutoJoia.jpg');
            cards[optionTwoId].setAttribute('src', 'images/narutoJoia.jpg');
            cardsWon.push(cardsChosen);
            cards[optionOneId].removeEventListener('click',flipCard);
            cards[optionTwoId].removeEventListener('click',flipCard);
            
        } else{
            cards[optionOneId].setAttribute('src', deckImg);
            cards[optionTwoId].setAttribute('src', deckImg);
        }

        cardsChosen = [];
        cardsChosenId = [];

        resultDisplay.textContent = cardsWon.length;

        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = "Congratulations! You win!"
        }
    }

    function flipCard(){
        var cardId = this.getAttribute('data-id');

        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);

        this.setAttribute('src', cardArray[cardId].img);

        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500);

        }

    }


    createBoard();
});