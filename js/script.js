var Current=0;
var chatCount = 0;
// event listeners
window.addEventListener('keydown', (e)=> {
    if (e.key=='ArrowRight' || e.key=='ArrowDown') {
        chatCount = 0;
        for (let message of document.querySelector('.messages').children) message.style.display='none';
        if (false || slides[Current].nextImg()) {
        }
        else if (slides[Current].next()) {
            slides[Current].current++;
            // slides[Current].nextImg();
        }
        else {
            slides[Current].current = 0;
            slides[Current].remove();
            Current++;
            if (Current >= slides.length) Current = slides.length-1;
            slides[Current].show();
            // slides[Current].nextImg();
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


function inputChangedChatBot(e) {
    let input = document.querySelector('.chatbot input');
    let messages = document.querySelector('.messages');
    if (event.key==="Enter") {
        messages.children[2*chatCount].innerHTML = e.value;
        messages.children[2*chatCount].style.display   = 'block';
        window.setTimeout(()=>{messages.children[2*chatCount++ + 1].style.display = 'block';}, 1000);
        input.value = '';
    }
}



// onclick open info
for (let element of document.querySelectorAll(".slide-wrapper div div")) {
    element.addEventListener("click", () => {
        for (let ele of document.querySelectorAll(".slide-wrapper div div"))
            ele.id = "";
        element.id = "active";

        setTimeout( () => {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            });
        }, 500);
    });
}