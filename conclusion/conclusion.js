const conclusion  = document.querySelector('.ending');

function Conclusion() {
    conclusion.style.display  = 'block';
    current_uses.style.display     = 'none';
    Current = 7;
}
function ConclusionBack () {
    conclusion.style.display = 'none';
    current_uses.style.display    = 'block';
    Current = 6;
}