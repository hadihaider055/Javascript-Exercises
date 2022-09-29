// Exercise 45

function about_car(manufacturer, model = "Mustang", car_info) {
  return {
    manufacturer,
    model,
    ...car_info,
    average: "12km/l",
    color: "red",
  };
}

console.log(
  about_car("Ford", "Mustang", {
    year: 1964,
    month: 1,
  })
);
