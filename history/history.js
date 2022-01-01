const history1  = document.querySelector('.history');

function history() {
    history1.style.display  = 'block';
    intro.style.display     = 'none';
    Current = 3;
}
function HistoryBack () {
    history1.style.display = 'none';
    intro.style.display    = 'block';
    Current = 2;
}