function hospital(input) {
    let index = 0;
    let period = Number(input[index]);
    index++
    let treatedPatient = 0;
    let untreatPatient = 0;
    let patient = 0;
    let patientPerDay = 7
    for (let i = 1; i <= period; i++) {
        patient = Number(input[index]);
        index++
        if (i % 3 === 0 && untreatPatient > treatedPatient) {
            patientPerDay++
        }
        if (patient < patientPerDay) {
            treatedPatient += patient;
        } else {
            untreatPatient += patient - patientPerDay;
            treatedPatient += patientPerDay;
        }

    }
    console.log(`Treated patients: ${treatedPatient}.`)
    console.log(`Untreated patients: ${untreatPatient}.`)

}
hospital(["6", "25", "25", "25", "25", "25", "2"])
//hospital(["4", "7", "27", "9", "1"])
