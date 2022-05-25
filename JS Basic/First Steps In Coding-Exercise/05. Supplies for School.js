function suppliesForSchool(input) {
    const penPackPrice = 5.80;
    const markerPacPrice = 7.20;
    const cleanerPricePerLitre = 1.20;
    const percentDiscount = Number(input[3]) / 100;

    const numberPenPack = Number(input[0]);
    const numberMarkerPack = Number(input[1]);
    const neededLitresCleaner = Number(input[2]);
    const priceForPen = numberPenPack * penPackPrice;
    const priceForMarker = numberMarkerPack * markerPacPrice;
    const priceForCleaner = neededLitresCleaner * cleanerPricePerLitre;
    const totalPrice = priceForPen + priceForMarker + priceForCleaner ;
    const priceAfterDiscount =totalPrice - (totalPrice * percentDiscount);
    console.log(priceAfterDiscount)
}

suppliesForSchool(["2", "3", "4", "25"])