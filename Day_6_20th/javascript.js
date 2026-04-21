/* ------- ------- */
/* Function */
/* ------- ------- */
/* IIFE */
(function() {
  console.log("Restaurant opened!");
})();

/* Function Declaration */
function cookDish(disk){
    return `Cooking ${disk}`;
}

/* Function Expression */
const cookDish2 = function(disk){
    return `Cooking ${dish}`;
}

/* Arrow Function [Same as above] */
const cookDish3 = (dish) => `Cooking ${dish}`;

/* Callback Function [A function passed into another function] */
function takeOrder(dish, callback){
    console.log(`Order received: ${dish}`);
    callback(dish);
}
takeOrder("Pizza", cookDish);

/* call(), apply(), bind() */
const kitchen1 = {
  chef: "Ajay",
  cook: function(dish) {
    console.log(`${this.chef} is cooking ${dish}`);
  }
};
const kitchen2 = { chef: "Ravi" };
kitchen1.cook.call(kitchen2, "Pasta");
kitchen1.cook.apply(kitchen2, ["Pasta"]);
const newCook = kitchen1.cook.bind(kitchen2);
newCook("Pasta")

/* Higher-Order Functions */
function processOrder(dish, action) {
  return action(dish);
}