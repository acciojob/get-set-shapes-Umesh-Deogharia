//complete this code
class Rectangle {
	constructor(width,height){
		this._width = width;
		this._height = height;
	}

	get width(){
		return this._width;
	}
	
	get height(){
		return this._height;
	}

	getArea(){
		return (this.width)*(this.height);
	}
	
}

class Square extends Rectangle {
	constructor(side){
		this._side = side;
	}

	get width(){
		return this._side;
	}
	
	get height(){
		return this._side;
	}

	getArea(){
		return (this.side)*(this.side);
	}
	
	getPerimeter(){
		return 4*this._side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
