function resize() {
    let cards = document.querySelectorAll('.calendar__day');
    for(let i=0; i<cards.length;i++){
        cards[i].style.height = cards[i].offsetWidth+'px';
    }
}