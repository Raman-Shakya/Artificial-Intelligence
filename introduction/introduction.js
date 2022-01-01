const intro  = document.querySelector('.introduction');

function Introduction() {
    intro.style.display = "block";
    slide.style.display = 'none';
    Current = 2;
}
function IntroBack () {
    intro.style.display = 'none';
    slide.style.display = 'flex';
    Current = 1;
}