function ticketSale(dayType, age) {
  let price = 0;
  if (age >= 0 && age <= 122) {
    switch (dayType) {
      case 'Weekday':
        if (age <= 18 || age > 64) {
          price = 12;
        } else {
          price = 18;
        }
        break;
      case 'Weekend':
        if (age <= 18 || age > 64) {
          price = 15;
        } else {
          price = 20;
        }
        break;
      case 'Holiday':
        if (age <= 18) {
          price = 5;
        } else if (age <= 64) {
          price = 12;
        } else if (age > 64) {
          price = 10;
        }
    }
    console.log(`${price}$`);
  } else {
    console.log('Error!');
  }
}
ticketSale('Weekday', 42);
