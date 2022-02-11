class Slide {
    constructor(doc) {
        this.current = 0;
        this.doc     = doc;
        this.doc.style.display = 'none';
        this.currentImgId      = 0;
    }
    show() {
        this.doc.style.display = 'flex';
        // for (let sub of this.doc.children) {
        //     // sub.style.display = 'none';
        // }
        // this.doc.children[0].style.display = 'block';
        this.doc.children[0].class = 'active';
    }
    remove() {
        this.doc.style.display = 'none';
    }
    next() {
        return false;
        if (this.current+1 >= this.doc.children.length) return false;
        this.doc.children[this.current].style.display = 'none';
        this.doc.children[this.current+1].style.display = 'block';
        return true;
    }
    nextImg() {
        return false;
        let temp = this.doc.children[this.current].children[1].children[0].children;
        if (this.currentImgId < temp.length && this.currentImgId >= 0) {
            temp[Math.max(this.currentImgId-1,0)].style.display = 'none';
            temp[this.currentImgId++].style.display = 'block';
            return true;
        }
        this.currentImgId = 0;
        return false;
    }
}


// slide setters
var slides = [];
const slide_wrapper = document.querySelector('.slide-wrapper');
for (let i=0; i<slide_wrapper.childElementCount; i++) {
    slides.push( new Slide(slide_wrapper.children[i]) )
}


// history slide
slides[2].slidePercents = [20, 42, 50, 60, 89, 100];
slides[2].nextImg = function () {
    if (this.current >= this.slidePercents.length || this.current < 0) return false;
    document.querySelector('.history_wrapper').style.height = `${this.slidePercents[this.current]}%`;
    this.current++;
    return true;
}