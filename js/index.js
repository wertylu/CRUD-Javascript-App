import {
    clearInputs,
    addItemToPage,
    getInputValues,
    renderItems,
    renderTotalPrice,
}
    from './dom_util.js';



const addButton = document.getElementById("add-button");
const findButton = document.getElementById("find-button");
const findInput = document.getElementById("find-input");
const showAllButton = document.getElementById("show-all-button");
const sortButton = document.getElementById("sort-button");

let cars = [];
let renderedItems = [];

const addItem = ({producer, price, horsepower}) => {
    const newItem = {
        producer,
        price,
        horsepower,
    };

    cars.push(newItem);
    renderedItems = cars;
    addItemToPage(newItem);
}

addButton.addEventListener("click", (event) => {
    event.preventDefault();

    const {producer, price, horsepower} = getInputValues();

    clearInputs();
    addItem({
        producer: producer,
        price: price,
        horsepower: horsepower,
    })

    countTotalPrice(cars);
    renderedItems = cars;
})

findButton.addEventListener("click", (event) => {
    event.preventDefault();

    const foundCars = cars.filter(car => car.producer.search(findInput.value) !== -1);

    renderItems(foundCars);
    renderedItems = foundCars;
    countTotalPrice(foundCars);
})

showAllButton.addEventListener("click", (event) => {
    event.preventDefault();
    findInput.value = "";
    renderItems(cars);

    countTotalPrice(cars);
    renderedItems = cars;
})

sortButton.addEventListener("click", (event) => {
    event.preventDefault();
    const sortedCars = renderedItems.sort(function (a, b) {
        return b.horsepower - a.horsepower;
    })
    renderItems(sortedCars);
    renderedItems = sortedCars;
})

const countTotalPrice = (myCars) => {
    const totalPrice = myCars.reduce(function (totalPrice, b) {
        return totalPrice + parseInt(b.price);
    }, 0)
    renderTotalPrice(totalPrice);
}

renderItems(cars);