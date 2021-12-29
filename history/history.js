const history1  = document.querySelector('.history');

function history() {
    history1.style.transform = "translateX(0%)";
    history1.style.position  = 'relative';
    intro.style.transform  = "translateX(-100%)";
    intro.style.display    = 'none';
    Current = 4;
}
function HistoryBack () {
    history1.style.transform = "translateX(100%)";
    history1.style.position  = 'absolute';
    intro.style.transform  = "translateX(0%)";
    intro.style.display    = 'block';
    Current = 3;
}