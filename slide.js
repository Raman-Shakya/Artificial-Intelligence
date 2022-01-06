class Slide {
    constructor(doc) {
        this.current = 0;
        this.doc     = doc;
        this.doc.style.display = 'none';
        this.currentImgId      = 0;
    }
    show() {
        this.doc.style.display = 'flex';
        for (let sub of this.doc.children) {
            sub.style.display = 'none';
        }
        this.doc.children[0].style.display = 'block';
    }
    remove() {
        this.doc.style.display = 'none';
    }
    next() {
        if (this.current+1 >= this.doc.children.length) return false;
        this.doc.children[this.current].style.display = 'none';
        this.doc.children[this.current+1].style.display = 'block';
        return true;
    }
    nextImg() {
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
