class Shape {
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor (radius) {
        super(); // needed to use this
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor (width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

const circle = new Circle(2);
const rectangle = new Rectangle(5, 6);

console.log(circle.area());
console.log(rectangle.area());

//git branch app