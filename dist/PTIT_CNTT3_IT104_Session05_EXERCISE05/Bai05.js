class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return this.width + this.height;
    }
}
let rectangle = new Rectangle(10, 20);
console.log("Chiều rộng:", rectangle.getWidth());
console.log("Chiều dài:", rectangle.getHeight());
console.log("Diện tích:", rectangle.calculateArea());
console.log("Chu vi:", rectangle.calculatePerimeter());
rectangle.setWidth(20);
rectangle.setHeight(30);
console.log("Chiều rộng mới:", rectangle.getWidth());
console.log("Chiều dài mới:", rectangle.getHeight());
console.log("Diện tích mới:", rectangle.calculateArea());
console.log("Chu vi mới:", rectangle.calculatePerimeter());
