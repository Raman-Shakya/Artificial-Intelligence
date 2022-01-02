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
            Components();
            buttons.style.display = "block";
        }
        else if (Current==4) {
            uses();
            buttons.style.display = "block";
        }
        else if (Current==5) {
            Current_use_show();
            buttons.style.display = "none";
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
        else if (Current==5) {
            UsesBack();
            buttons.style.display = 'block';
        }
        else if (Current==6) {
            Current_use_back();
            buttons.style.display = 'block';
        }
    }
    else if(e.key=='a') Previous();
    else if(e.key=='d') Next();
})



function Next() {
    if (Current==4) {
        componentsNext();
    }
    else if (Current==5) {
        UsesNext();
    }
}
function Previous() {
    if (Current==4) {
        componentsPrevious();
    }
    else if (Current==5) {
        UsesPrevious();
    }
}