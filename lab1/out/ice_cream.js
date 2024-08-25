function iceCreamPrice() {
    var _a, _b, _c;
    var smallCup = 10;
    var largeCup = 25;
    var toppingsPrices = {
        шоколад: 5,
        карамель: 6,
        ягоди: 10,
    };
    var marshmallow = 5;
    var size = (_a = prompt("Виберіть розмір стаканчика : маленький або великий?")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    var totalPrice = 0;
    if (size === "маленький") {
        totalPrice += smallCup;
    }
    else if (size === "великий") {
        totalPrice += largeCup;
    }
    else {
        alert("Неправийльний розмір стакана");
        return;
    }
    var toppings = ((_b = prompt("Виберіть начинку (можна декілька через кому): шоколад, карамель, ягоди")) === null || _b === void 0 ? void 0 : _b.toLowerCase().split(",").map(function (topping) { return topping.trim(); })) || [];
    if (toppings.length === 0 || toppings.some(function (topping) { return !(topping in toppingsPrices); })) {
        alert("Виберіть хоча б одну начтнку з наявних");
        return;
    }
    toppings.forEach(function (topping) {
        totalPrice += toppingsPrices[topping];
    });
    var addMarshmallow = (_c = prompt("Бажаєте додати маршмелоу? (так/ні)")) === null || _c === void 0 ? void 0 : _c.toLowerCase();
    if (addMarshmallow === "так") {
        totalPrice += marshmallow;
    }
    alert("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u0432\u0430\u0448\u043E\u0433\u043E \u043C\u043E\u0440\u043E\u0437\u0438\u0432\u0430: ".concat(totalPrice, " \u0433\u0440\u043D"));
}
iceCreamPrice();
