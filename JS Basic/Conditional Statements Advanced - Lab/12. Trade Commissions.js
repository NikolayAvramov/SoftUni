function commissions(input) {
    const town = input[0];
    const sales = Number(input[1]);
    let commission = 0;

    switch (town) {
        case "Sofia":
            if (sales >= 0 && sales <= 500) {
                commission = (sales * 5) / 100;
            } else if (sales <= 1000) {
                commission = (sales * 7) / 100;
            } else if (sales <= 10000) {
                commission = (sales * 8) / 100;
            } else if (sales > 10000) {
                commission = (sales * 12) / 100;
            }break;
        case "Varna":
            if (sales >= 0 && sales <= 500) {
                commission = (sales * 4.5) / 100;
            } else if (sales <= 1000) {
                commission = (sales * 7.5) / 100;
            } else if (sales <= 10000) {
                commission = (sales * 10) / 100;
            } else if (sales > 10000) {
                commission = (sales * 13) / 100;
            } break;
        case "Plovdiv":
            if (sales >= 0 && sales <= 500) {
                commission = (sales * 5.5) / 100;
            } else if (sales <= 1000) {
                commission = (sales * 8) / 100;
            } else if (sales <= 10000) {
                commission = (sales * 12) / 100;
            } else if (sales > 10000) {
                commission = (sales * 14.5) / 100; 
            } break;
        default: commission = -1; break;
    } 
    if (commission < 0) {
        console.log(`error`)
    } else {
        console.log(commission.toFixed(2))
    }

}
commissions(["Sofia",
"1500"])

