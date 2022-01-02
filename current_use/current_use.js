const current_uses  = document.querySelector('.currentUse');

function Current_use_show() {
    current_uses.style.display  = 'block';
    Uses.style.display     = 'none';
    Current = 6;
}
function Current_use_back () {
    current_uses.style.display = 'none';
    Uses.style.display    = 'block';
    Current = 5;
}