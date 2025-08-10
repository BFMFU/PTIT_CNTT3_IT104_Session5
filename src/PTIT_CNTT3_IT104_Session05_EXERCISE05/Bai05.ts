class Rectangle {
  private width: number;
  private height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  public getWidth(): number {
    return this.width;
  }
  public setWidth(width: number): void {
    this.width = width;
  }
  public getHeight(): number {
    return this.height;
  }
  public setHeight(height: number): void {
    this.height = height;
  }
  calculateArea(): number {
    return this.width * this.height;
  }
  calculatePerimeter(): number {
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
