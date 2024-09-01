"use strict";
function iceCreamPrice() {
    var _a, _b;
    const PriceOfSmallCup = 10;
    const largeCup = 25;
    const toppingsPrices = {
        шоколад: 5,
        карамель: 6,
        ягоди: 10,
    };
    const marshmallow = 5;
    const size = (_a = prompt("Виберіть розмір стаканчика : маленький або великий?")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    let totalPrice = 0;
    if (size === "маленький") {
        totalPrice += PriceOfSmallCup;
    }
    else if (size === "великий") {
        totalPrice += largeCup;
    }
    else {
        alert("Неправийльний розмір стакана");
        return;
    }
    const toppings = ((_b = prompt("Виберіть начинку (можна декілька через кому): шоколад, карамель, ягоди")) === null || _b === void 0 ? void 0 : _b.toLowerCase().split(",").map(topping => topping.trim())) || [];
    if (toppings.length === 0 || toppings.some(topping => !(topping in toppingsPrices))) {
        alert("Виберіть хоча б одну начтнку з наявних");
        return;
    }
    toppings.forEach(topping => {
        totalPrice += toppingsPrices[topping];
    });
    const addMarshmallow = prompt("Бажаєте додати маршмелоу? (так/ні)").toLowerCase();
    if (addMarshmallow === "так") {
        totalPrice += marshmallow;
    }
    alert(`Загальна вартість вашого морозива: ${totalPrice} грн`);
}
iceCreamPrice();
//# sourceMappingURL=ice_cream.js.map