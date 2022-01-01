const components  = document.querySelector('.components');

let currentComponent = 0;

function Components() {
    components.style.display  = 'flex';
    history1.style.display     = 'none';
    for (let i of components.children) {
        i.style.display = 'none';
    }
    components.children[currentComponent].style.display = 'block';
    Current = 4;
}
function ComponentsBack() {
    components.style.display = 'none';
    history1.style.display    = 'block';
    currentComponent = 0;
    Current = 3;
}




function componentsNext() {
    if (currentComponent==components.childElementCount-1) return;
    for (let i of components.children) {
        i.style.display = 'none';
    }
    components.children[++currentComponent].style.display = 'block';
}
function componentsPrevious() {
    if (currentComponent==0) return;
    for (let i of components.children) {
        i.style.display = 'none';
    }
    components.children[--currentComponent].style.display = 'block';
}

