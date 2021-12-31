makeFirstSlide();

window.addEventListener('keydown', (e)=> {
    if (e.key=='ArrowRight' || e.key=='ArrowDown') {
        if (Current==0) {
            makeSecondSlide();
        }
        else if (Current==1) {
            Introduction();
        }
        else if (Current==2) {
            history();
        }
    }
    else if (e.key=='ArrowLeft' || e.key=='ArrowUp') {
        if (Current==1) {
            makeFirstSlide();
        }
        else if (Current==2) {
            IntroBack();
        }
        else if (Current==3) {
            HistoryBack();
        }
    }
})