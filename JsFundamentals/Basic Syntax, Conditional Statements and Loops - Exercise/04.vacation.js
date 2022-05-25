function vacantion(count, type, day) {
  const studentsPriceAtFriday = 8.45;
  const businessPriceAtFriday = 10.9;
  const regularPriceAtFriday = 15;
  const studentsPriceAtSaturday = 9.8;
  const businessPriceAtSaturday = 15.6;
  const regularPriceAtSaturday = 20;
  const studentsPriceAtSunday = 10.46;
  const businessPriceAtSunday = 16;
  const regularPriceAtSunday = 22.5;

  let totalPrice = 0;
  const studentDiscount = 0.15;
  const businesDiscount = 10;
  const regularDiscount = 0.05;

  if (type === "Business" && count >= 100) {
    count -= businesDiscount;
  }

  switch (day) {
    case "Friday":
      switch (type) {
        case "Students":
          totalPrice = count * studentsPriceAtFriday;
          break;
        case "Business":
          totalPrice = count * businessPriceAtFriday;
          break;
        case "Regular":
          totalPrice = count * regularPriceAtFriday;
          break;
      }
      break;
    case "Saturday":
      switch (type) {
        case "Students":
          totalPrice = count * studentsPriceAtSaturday;
          break;
        case "Business":
          totalPrice = count * businessPriceAtSaturday;
          break;
        case "Regular":
          totalPrice = count * regularPriceAtSaturday;
          break;
      }
      break;
    case "Sunday":
      switch (type) {
        case "Students":
          totalPrice = count * studentsPriceAtSunday;
          break;
        case "Business":
          totalPrice = count * businessPriceAtSunday;
          break;
        case "Regular":
          totalPrice = count * regularPriceAtSunday;
          break;
      }
  }

  if (type === "Students" && count >= 30) {
    totalPrice -= totalPrice * studentDiscount;
  } else if (type === "Regular" && count >= 10 && count <= 20) {
    totalPrice -= totalPrice * regularDiscount;
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacantion(30, "Students", "Sunday");
