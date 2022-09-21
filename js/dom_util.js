const nameInput = document.getElementById("producer-input");
const priceInput = document.getElementById("price-input");
const horsePowerInput = document.getElementById("horsepower-input");
const itemsContainer = document.getElementById("items-container");
const totalPrice = document.getElementById("total-price");


const totalPriceTemplate = (totalPrice) => `
Total price: ${totalPrice} $
`;

const itemTemplate = ({ producer, price, horsepower}) => `
<li class="item">
    <img src="images/img.jpg" alt="car"/>
    <div class="item-body">
        <h1 class="item-producer">"${producer}"</h4>
            <div class="item-info">
                <h3 class="item-price">${price} $</h3>
                <h3 class="item-horsepower">${horsepower} hp</h3>
            </div>
    </div>
</li>
`;

export const clearInputs = () => {
    nameInput.value = "";
    priceInput.value = "";
    horsePowerInput.value = "";
};

export const addItemToPage = ({id, producer, price, horsepower}) => {
    itemsContainer.insertAdjacentHTML(
        "beforeend",
        itemTemplate({id, producer, price, horsepower})
    )
}

export const getInputValues = () => {
    return {
        producer: nameInput.value,
        price: priceInput.value,
        horsepower: horsePowerInput.value,
    }
};

export const renderItems = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    }
}

export const renderTotalPrice = (price) => {
    totalPrice.innerHTML = "";
    totalPrice.insertAdjacentHTML(
        "afterbegin",
        totalPriceTemplate(price),
    )
}