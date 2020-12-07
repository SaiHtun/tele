
const cars = ['bmw', 'honda', 'toyota', 'honda', 'honda','mercedez', 'mazda'];
const oldCars = ['laybane', 'sitecar'];

const array = new Set(cars.map((car) => car));

["siteCar", ...array].map((car) => console.log(car));