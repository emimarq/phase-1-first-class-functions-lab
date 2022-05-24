// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
  const firstTwoDrivers = drivers.slice(0, 2);
  return firstTwoDrivers;
}
console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = (drivers) => {
  const lastTwoDrivers = drivers.slice(2);
  return lastTwoDrivers;
}
console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, fn){
  return fn(drivers);
}