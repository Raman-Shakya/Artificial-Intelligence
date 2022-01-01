const buttons = document.querySelector('.buttons');
makeFirstSlide();

window.addEventListener('keydown', (e)=> {
    if (e.key=='ArrowRight' || e.key=='ArrowDown') {
        if (Current==0) {
            makeSecondSlide();
            buttons.style.display = "none";
        }
        else if (Current==1) {
            Introduction();
            buttons.style.display = "none";
        }
        else if (Current==2) {
            history();
            buttons.style.display = "none";
        }
        else if (Current==3) {
            buttons.style.display = "block";
            Components();
        }
    }
    else if (e.key=='ArrowLeft' || e.key=='ArrowUp') {
        if (Current==1) {
            makeFirstSlide();
            buttons.style.display = "none";
        }
        else if (Current==2) {
            IntroBack();
            buttons.style.display = "none";
        }
        else if (Current==3) {
            HistoryBack();
            buttons.style.display = "none";
        }
        else if (Current==4) {
            ComponentsBack();
            buttons.style.display = "none";
        }
    }
    else if(e.key=='a') Previous();
    else if(e.key=='d') Next();
})



function Next() {
    if (Current==4) {
        componentsNext();
    }
}
function Previous() {
    if (Current==4) {
        componentsPrevious();
    }
}