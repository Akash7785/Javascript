class vehicle {
  constructor(type, regNumber) {
    this.type = type;
    this.regNumber = regNumber;
  }
}

class Car extends vehicle {
  constructor(type, regNumber) {
    super(type, regNumber);
  }
}

class Bike extends vehicle {
  constructor(type, regNumber) {
    super(type, regNumber);
  }
}

class Truck extends vehicle {
  constructor(type, regNumber) {
    super(type, regNumber);
  }
}

let c1 = new Truck("car", "mh21");

class Slot {
  #isBooked;
  constructor(number, type) {
    this.number = number;
    this.type = type;
    this.#isBooked = false;
  }

  get _isBooked() {
    return this.#isBooked;
  }

  set _isBooked(bool) {
    this.#isBooked = bool;
  }
}

class ParkingFloor {
  constructor(floonumber, maxSlots) {
    this.floonumber = floonumber;
    this.parkingSpots = [];

    for (let i = 0; i < maxSlots; i++) {
      if (i == 0) {
        this.parkingSpots.push(new Slot(i, "Truck"));
      } else if (i == 1) {
        this.parkingSpots.push(new Slot(i, "Bike"));
      } else {
        this.parkingSpots.push(new Slot(i, "Car"));
      }
    }
  }
}

class ParkingLot {
  constructor() {
    this.numberfoFloors = this.numberfoFloors;
    this.floors = [];

    fl;
  }
}

let pf = new ParkingFloor(1, 3);
console.log(pf);
