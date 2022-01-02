const Uses  = document.querySelector('.uses');

let currentUses = 0;

function uses() {
    Uses.style.display  = 'flex';
    components.style.display     = 'none';
    for (let i of Uses.children) {
        i.style.display = 'none';
    }
    Uses.children[currentUses].style.display = 'block';
    Current = 5;
}
function UsesBack() {
    Uses.style.display = 'none';
    components.style.display    = 'block';
    currentUses = 0;
    Current = 4;
}




function UsesNext() {
    if (currentUses==Uses.childElementCount-1) return;
    for (let i of Uses.children) {
        i.style.display = 'none';
    }
    Uses.children[++currentUses].style.display = 'block';
}
function UsesPrevious() {
    if (currentUses==0) return;
    for (let i of Uses.children) {
        i.style.display = 'none';
    }
    Uses.children[--currentUses].style.display = 'block';
}

