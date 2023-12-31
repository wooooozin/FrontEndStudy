
class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
  getInformation() {
    console.log(`${this.name}의 바퀴는 ${this.wheel}개 입니다.`)
  }
}

const myVehicle = new Vehicle('운송수단', 2);
console.log(myVehicle);
myVehicle.getInformation();


class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel);
  }
}

const myBicycle = new Bicycle('자전거', 2);
console.log(myBicycle);
myBicycle.getInformation();

class Car extends Vehicle {
  constructor(name, wheel, licence) {
    super(name, wheel)
    this.licence = licence
  }
  getInformation() {
    super.getInformation();
    console.log(`이 자동차는 운전 면허가 ${this.licence ? '필요합니다' : '필요하지 않습니다'}.`);
  }
}

const myCar = new Car('자동차', 4, true);
console.log(myCar);
myCar.getInformation();

