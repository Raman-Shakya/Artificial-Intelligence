var Current=0;
// event listeners
window.addEventListener('keydown', (e)=> {
    if (e.key=='ArrowRight' || e.key=='ArrowDown') {
        if (slides[Current].nextImg()) {
        }
        else if (slides[Current].next()) {
            slides[Current].current++;
            slides[Current].nextImg();
        }
        else {
            slides[Current].current = 0;
            slides[Current].remove();
            Current++;
            if (Current >= slides.length) Current = slides.length-1;
            slides[Current].show();
            slides[Current].nextImg();
        }
    }
    else if (e.key=='ArrowLeft' || e.key=='ArrowUp') {
        slides[Current].currentImgId = 0;
        slides[Current].current = 0;
        slides[Current].remove();
        Current--;
        if (Current<0) Current = 0;
        slides[Current].show();
    }
})