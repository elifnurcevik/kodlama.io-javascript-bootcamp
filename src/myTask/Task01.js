let number = prompt("Lütfen bir sayı giriniz: ");
let counter = 0;

for(let index = 2; index < number; index++)
{
  if(number % index == 0)
  {
    counter++;
    break;
  }
}
console.log(counter > 0 ? "Asal Sayı değil" : "Asal Sayı");