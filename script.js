
const DomElement = function (selector, height, width, bg, fontSize, text) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.text = text;
    this.cssString = `height: ${this.height};
        width: ${this.width};
        background-color: ${this.bg};
        font-size: ${this.fontSize};
        position: absolute;`
}

DomElement.prototype.render = function () {
    // document.body.innerHTML = '';
    let div = document.createElement('div');
    if (this.selector[0] === '.') {
        div.classList.add(this.selector.slice(1));
    }
    else if (this.selector[0] === '#') {
        div.setAttribute('id', this.selector.slice(1));
    }
    div.style.cssText = this.cssString;
    div.textContent = this.text;
    document.body.append(div);

}

const dom = new DomElement('.dom', '100px', '100px', 'red', '12px', 'Hello')
dom.render()



