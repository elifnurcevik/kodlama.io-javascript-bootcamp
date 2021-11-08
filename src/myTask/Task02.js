const number1 = prompt("Birinci sayı: ");
const number2 = prompt("İkinci sayı: ");

let total1 = 0;
let total2 = 0;

function isFriend(s1, s2) {
    for (let index = 0; index < s1; index++) {
        if (number1 % index === 0) {
            total1 += index;
        }
    }
    for (let index = 0; index < s2; index++) {
        if (number2 % index === 0) {
            total2 += index;
        }
    }
    return (total1 == s2 && total2 == s1) ? "Arkadaş Sayı" : "Arkadaş Sayı Değil";
}

console.log(isFriend(number1, number2));