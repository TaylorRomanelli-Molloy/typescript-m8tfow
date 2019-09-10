import display from './display';

class Car {
  private totalMiles:number;
  private color:string;
  private eng:Engine;

  constructor(carColor:string) {
    this.totalMiles = 0;
    this.color = carColor;
    this.eng = new Engine(Math.floor(4*Math.random()));
  }
  drive(miles:number):void {
    display("The", this.color, "car drives", miles, "miles.");
    this.eng.makeNoise();
    this.totalMiles = this.totalMiles + miles;
  }
  get miles():number {
   return this.totalMiles;
  }
}


export default Car;