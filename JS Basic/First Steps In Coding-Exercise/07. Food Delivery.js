function foodDelivery(input) {
const chikenMenu = 10.35;
const fishMenu = 12.40;
const veggieMenu = 8.15;
const delivery = 2.50;
const numberCikenMenu = Number(input[0]);
const numberFishMenu = Number(input[1]);
const numberVeggieMenu = Number(input[2]);
const chikenMenuPrice = numberCikenMenu * chikenMenu;
const fishMenuPrice = numberFishMenu * fishMenu;
const veggieMenuPrice = numberVeggieMenu * veggieMenu;
const desertPrice = (chikenMenuPrice + fishMenuPrice + veggieMenuPrice) * 0.20;
const totalPrice = chikenMenuPrice + fishMenuPrice + veggieMenuPrice + desertPrice + delivery;
console.log(totalPrice);
}

foodDelivery(["2","4","3"])