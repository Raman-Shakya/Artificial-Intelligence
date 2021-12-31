const intro  = document.querySelector('.introduction');
const before = document.querySelector('.slide');

function Introduction() {
    intro.style.transform = "translateX(0%)";
    intro.style.position = 'relative';
    before.style.transform = 'translateX(-100%)';
    before.style.display = 'none';
    Current = 2;
}
function IntroBack () {
    intro.style.transform = "translateX(100%)";
    intro.style.position = 'absolute';
    before.style.transform = 'translateX(0%)';
    before.style.display = 'flex';
    Current = 1;
}