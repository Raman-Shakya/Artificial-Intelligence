var text_1 = "INDEX";
var text_2 = [
    "Introduction",
    "History",
    "Components of AI",
    "Uses of AI",
    "Current Use",
    "Conclusion",
];
var text_3 = [
    "Raman Shakya",
    "Soyam Shrestha",
    "Nilisha Shakya",
    "Dipa Gurung",
];
var colors = [
    "#a00",
    "#0a0",
    "#00a",
    "#05a",
    "#55a",
    "#5aa",
];

const N = 5;
const slide = document.querySelector('.slide');
var Current = 0;

function makeSlide() {
    slide.innerHTML = '';
    for (let i=0; i<N; i++) {
        let temp = document.createElement('div');
        temp.appendChild(document.createElement('p'));
        temp.className = `Div`;
        slide.appendChild(temp);
    }
}

function makeFirstSlide(text) {
    makeSlide();
    let width = 70;
    let maxWidth = 5*width+4*10;
    for (let i=0; i<N; i++) {
        let temp = document.querySelector(`.Div:nth-child(${i+1})`);
        console.log(temp)
        temp.children[0].innerHTML = text[i];
        temp.style.marginLeft = `${(i)*width+(i-1)*10 - maxWidth/2}px`;
    }
    Current = 0;
}
function makeSecondSlide(text, colors) {
    let cur = 0;
    let width = 200;
    let maxWidth = 6*width+5*10;
    
    let temp = document.createElement('div');
    temp.appendChild(document.createElement('p'));
    temp.className = `Div`;
    temp.style.background = `rgba(0,0,0,0)`;
    slide.appendChild(temp);
    let tempCur = Current;

    let a = setInterval(() => {
        let temp;
        if (tempCur==0)
            temp =  document.querySelector(`.Div:nth-child(${cur+1})`);
        else
            temp = document.querySelector(`.Div3:nth-child(${cur+1})`);
        temp.style.background = colors[cur];
        temp.className = `Div2`;
        temp.style.zIndex = 6-cur;
        temp.children[0].innerHTML = text[cur++];
        temp.style.width  = ``;
        temp.style.height = ``;
        temp.style.marginLeft = `${(cur-1)*width + (cur-.5)*10 - maxWidth/2}px`;
        if (cur==N+1) clearInterval(a);
    }, 300);
    Current = 1;
}

function makeThirdSlide(text) {
    let i=0;
    let sizes = [450, 350, 250, 200, 300, 400];
    for (i=0; i<N+1; i++) {
        let temp = document.querySelector(`.Div2:nth-child(${i+1})`);
        temp.children[0].innerHTML = '';
        temp.className = `Div3`;
        temp.style.width  = `${sizes[i]}px`;
        temp.style.height = `${sizes[i]}px`;
        temp.style.marginLeft = 0;
        temp.style.zIndex = 450-sizes[i];
    }
    document.querySelector(`.Div3:nth-child(4)`).children[0].innerHTML = text.join('<br>');
    Current = 2;
}

makeFirstSlide(text_1);

window.addEventListener('keydown', (e)=> {
    console.log(Current)
    if (e.key=='ArrowRight' || e.key=='ArrowDown') {
        if (Current==0) {
            makeSecondSlide(text_2, colors);
        }
        else if (Current==1) {
            makeThirdSlide(text_3);
        }
    }
    else if (e.key=='ArrowLeft' || e.key=='ArrowUp') {
        if (Current==1) {
            makeFirstSlide(text_1);
        }
        else if (Current==2) {
            makeSecondSlide(text_2, colors);
        }
    }
})