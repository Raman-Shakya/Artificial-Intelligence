var Current = 0;

const text_1 = "  AI  ";
const text_2 = [
    "Introduction",
    "History",
    "Components of AI",
    "Uses of AI",
    "Current Use",
    "Conclusion",
];

const N = text_1.length;
const slide = document.querySelector('.slide');

function makeSlide() {
    for (let i=0; i<N; i++) {
        let temp;
        if (Current==0)
            temp = document.querySelector(`.Div:nth-child(${i+1})`);
        else
            temp = document.querySelector(`.Div2:nth-child(${i+1})`);
        temp.innerHTML = '';
        temp.appendChild(document.createElement('p'));
        temp.className = `Div`;
    }
}

function makeFirstSlide() {
    makeSlide();
    let width = 70;
    let maxWidth = 5*width+4*10;
    for (let i=0; i<N; i++) {
        let temp = document.querySelector(`.Div:nth-child(${i+1})`);
        temp.children[0].innerHTML = text_1[i];
        if (text_1[i]==' ')
            temp.className +=  ` empchars`;
        temp.style.marginLeft = `${(i)*width+(i-1)*10 - maxWidth/2}px`;
    }
    Current = 0;
}
function makeSecondSlide() {
    document.querySelector('.names').className += ' blurNremove';
    let cur = 0;
    let width = 200;
    let maxWidth = 6*width+5*10;
    
    let tempCur = Current;

    let a = setInterval(() => {
        let temp;
        if (tempCur==0)
            temp =  document.querySelector(`.Div:nth-child(${cur+1})`);
        else
            temp = document.querySelector(`.Div3:nth-child(${cur+1})`);
        temp.className = `Div2`;
        temp.style.zIndex = 6-cur;
        temp.children[0].innerHTML = text_2[cur++];
        temp.style.width  = ``;
        temp.style.height = ``;
        temp.style.marginLeft = `${(cur-1)*width + (cur-.5)*10 - maxWidth/2}px`;
        if (cur==N) clearInterval(a);
    }, 300);
    Current = 1;
}