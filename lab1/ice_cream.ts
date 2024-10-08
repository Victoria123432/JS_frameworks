function iceCreamPrice (){
   const PriceOfSmallCup : number  = 10;
   const largeCup : number= 25;

   const toppingsPrices : {[key : string]: number} = {
    шоколад: 5,
    карамель : 6,
    ягоди: 10,
   };

   const marshmallow : number = 5;

   const size = prompt("Виберіть розмір стаканчика : маленький або великий?")?.toLowerCase();

   let totalPrice : number = 0;

   if (size === "маленький"){
    totalPrice += PriceOfSmallCup;
   } else if (size === "великий"){
    totalPrice += largeCup;
   } else {
    alert("Неправийльний розмір стакана");
    return;
   }

   

   const toppings : Array<string> = prompt("Виберіть начинку (можна декілька через кому): шоколад, карамель, ягоди")?.toLowerCase().split(",").map(topping => topping.trim()) || [];

   if(toppings.length === 0 || toppings.some(topping => !(topping in toppingsPrices))){
    alert("Виберіть хоча б одну начтнку з наявних");
    return;
   }

   toppings.forEach(topping =>{
    totalPrice += toppingsPrices[topping];
   })

   const addMarshmallow : string = prompt("Бажаєте додати маршмелоу? (так/ні)").toLowerCase();

   if (addMarshmallow === "так" ){
    totalPrice += marshmallow;
   }

   alert(`Загальна вартість вашого морозива: ${totalPrice} грн`);

}

iceCreamPrice();