class First {
    constructor() {
    }
    hello() {
        console.log('Привет я метод родителя');
    }
}
class Second extends First {
    constructor() {
        super()
    }
    hello() {
        super.hello()
        console.log('А я наследуемый метод!');
    }
}
const newClass = new Second()
newClass.hello()





