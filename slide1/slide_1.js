function makeSlide() {
    const slide = document.querySelector('.slide');
    slide.innerHTML = '';
    for (let i=0; i<6; i++) {
        let temp = document.createElement('div');
        temp.appendChild(document.createElement('p'));
        temp.className = `Div`;
        slide.appendChild(temp);
    }
}

function next_slide_1() {
    document.querySelector('.slide').style.display = 'flex';
    
    if (this.current>1 || this.current<0) return false;
    
    let settings = {
        0: {
            class: 'Div',
            text:  '  AI  ',
            width: 70,
            maxWidth: 5*70+4*10,
            delay: 0
        },
        1: {
            class: 'Div2',
            text: [
                "Introduction",
                "History",
                "Components of AI",
                "Uses of AI",
                "Current Use",
                "Conclusion",
            ],
            width: 200,
            maxWidth: 6*200+5*10,
            delay: 300
        }
    }
    
    if (!document.querySelector(`.Div`)) makeSlide();
    if (this.current==1) document.querySelector('.names').style.display = 'none';
    if (this.current==0) document.querySelector('.names').style.display = 'block';
    
    
    let cur = 0;
    let curSlide = this.current;
    let a = setInterval(() => {
        let temp;
        
        temp =  document.querySelector(`.Div:nth-child(${cur+1})`);
        
        temp.className = settings[curSlide].class;
        temp.style.zIndex = 6-cur;
        let tempChar = settings[curSlide].text[cur++];
        if (tempChar==' ') temp.className += ' empchars';
        temp.children[0].innerHTML = tempChar;
        
        temp.style.marginLeft = `${(cur-1)*settings[curSlide].width + (cur-.5)*10 - settings[curSlide].maxWidth/2}px`;
        if (cur==6) clearInterval(a);
    }, settings[curSlide].delay);
    
    
    return true;
}

function nextImg_slide_1() { return false; }

slides[0].nextImg = nextImg_slide_1;
slides[0].next = next_slide_1;