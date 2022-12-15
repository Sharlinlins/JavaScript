const a = [1, 2, 3, 4];
const b = [5, 6, 7, 8];
const c = [...a, ...b];

console.log(c);

//Spread using Objects
const vehicle = {
    brand: "Maruti",
    model: "Dzire",
    color: "Magma Gray"
}

const updateVehicle = {
    type: "Car",
    year: 2018,
    color: "Blue"
}

const details = {...vehicle, ...updateVehicle};
console.log(details);