class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined
    }
    for (let arrIndex = this.cards.length - 1; arrIndex > 0; arrIndex -=1) {
        const randomIndex = Math.floor(Math.random()*(arrIndex + 1));
        const temp = this.cards[arrIndex];
        this.cards[arrIndex] = this.cards[randomIndex];
        this.cards[randomIndex] = temp;
    }
  }

  checkIfPair(card1, card2) {
    if (this.checkIfPair) {
      this.pairsClicked +=1;
    }
    if (card1 === card2) {
      this.pairsGuessed +=1
      return true;
    } 
    else {
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length /2) {
      return true;
    } else {
      return false;
    }
  }
}
