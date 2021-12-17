let div;
let p;
const DomElement = function () {
    this.selector = function (name) {
        if (name[0] === '.') {
            div = document.createElement('div')
            div.className = name.slice(1);
            div.textContent = '123';
            document.body.append(div);

        }
        else if (name[0] === '#') {
            p = document.createElement('p')
            p.id = name.slice(1);
            p.textContent = '123';
            document.body.append(p);

        }
    };


    this.height = function (height) {
        div.style.height = height
        p.style.height = height
    }

    this.width = function (width) {
        div.style.width = width
        p.style.width = width
    }
    this.bg = function (bg) {
        div.style.backgroundColor = bg
        p.style.backgroundColor = bg
    }
    this.fontSize = function (size) {
        div.style.fontSize = size
        p.style.fontSize = size
    }
}
DomElement.prototype.render = function () {

}



const dom = new DomElement;
dom.selector('.block')
dom.selector('#best')
dom.height('100px')
dom.width('150px')
dom.bg('red')
dom.fontSize('32px')

console.log(dom);

