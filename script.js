// Kintamojo apibrezimas x
// Reiksmes priskyrimas kintamajam x
// Reiksmes pateikimas(reiksmes isvedimas)

// Kitnamaji - atminties vieta kazkur giliai kompiuteryje, i kuria galime irasyti savo reiksme
//ir laikyti kol programa nenustoja veikti

//let rezervuojame vieta; kintamasis - mano suteiktas kintamojo pavadinimas
//kintamojo pavadinime mes negalime naudoti specialiuju simboliu(,.=,+,-?...)
// kintamasis negali prasideti skaiciumi
let kintamasis;
let studentuKiekisKlaseje;
let kintamasis2;

//Reiskmes priskyrimai
//sveikuosius skaicius, tekstas, skaicius po kablelio ...
// x = 5
kintamasis = 5;
studentuKiekisKlaseje = 'dvylika'; // " " ar '' labiau yra programavimo stilius
kintamasis2 = 5.4; // programavime skaicius po kablelio visada yra . !!!!!!!!!


//1 yra pakankamai kvailas daiktas. Jisai nemasto, geba atlikti labai daug operaciju metu
// 0 ir 1
// 2 + 2 = 4 28 operacijas

//skaiciavimo masina

// + - * (/ %)

//sudeties
let suma;
let skaicius1;
let skaicius2;

skaicius1 = 6;
skaicius2 = 1028;
// x = 2;
// y = 2;
// suma = x+y = 2+2=4
suma = skaicius1 + skaicius2;
console.log(suma);

//atimtis
let skirtumas;
//kintamasis gali buti apibreztas tik VIENA karta

skaicius1 = 1028;
skaicius2 = 1000;
// 1028 - 1000 = 28
skirtumas = skaicius1 - skaicius2;

console.log(skirtumas);

//sandauga
let sandauga;
//kintamasis gali buti apibreztas tik VIENA karta

skaicius1 = 2;
skaicius2 = 4;
// 1028 - 1000 = 28
sandauga = skaicius1 * skaicius2;

console.log(sandauga);

//dalyba( / ir %)
//% - neveikia su skaiciais po kablelio(liekana pasiimti tik su sveikaisiais skaiciais)
let dalyba;

skaicius1=5;
skaicius2=4;

dalyba = 5.14/4.25; //1.25

let liekana;
liekana = 10%4; // 2

console.log(liekana);
console.log(dalyba);


//Reiksmiu isvedimai
//console.log - komanda
console.log(kintamasis);
console.log(studentuKiekisKlaseje);
console.log(kintamasis2);

//patikrinti ar skaicius yra lyginis
let skaiciusTikrinimui;
skaiciusTikrinimui = 11; //dalinasi is 2

let rezultatas;
rezultatas = skaiciusTikrinimui % 2;

// jeigu nera liekanos, rezultatas lygus 0, vadinasi skaicius lyginis
//jeigu liekana nelygi 0, vadinasi skaicius nelyginis

console.log(rezultatas);

let liekana1;
liekana1 = 21 % 40; // 21 ?? kam lygi liekana1 reiksme?
 console.log(liekana1);

 let dalyba1;

 dalyba1 = 40 / 0;

 console.log(dalyba1);

 let skaicius11 = "dvylika";
 let skaicius22 = 11;

 let veiksmas;

 veiksmas = skaicius11 - skaicius22; //'NaN reiksme' Not a number
//  kai mes pasirenkame neegzistuojanti elementa ir sudedame su egzistuojanciu elementu
// html elementas
//tekstini laukelis as suvedu 5, i kita tekstini as suvedu - nieko

let tekstas = '';





 console.log(veiksmas);


 //Patikrinti ar skaiciuas a yra didesnis uz skaiciu b
 //jei skaicius a yra didesnis, isvesti teksta "skaicius a yra didesnis"
 //kitu atveju isvesti teksta "skaicius a yra mazesnis"

 let a;
 let b;
 a = 10;
 b = 10;

 //salygos sakiniu if
//salygoje lyguma tikriname su ==
//kompiliatorius = supranta kaip priskyrima
 //ar 10> 10, melas
// > -daugiau
// == - lygu
// != - nelygu
// < - maziau
// <= - maziau arba lygu
// >= = daugiau arba lygu

 if(a>b) { 
    console.log('skaicius a yra didesnis');
    console.log('daugiau teksto');
 } else if (a==b){ //melu
    console.log('reiksmes yra lygios');
 }
 else {
    console.log('skaicius a yra mazesnis');
 }

let tekstas1 = 'tekstas1';
let tekstas2 = 'tekstas';
//melas
if(tekstas1==tekstas2) {
    console.log('tekstu reiksmes yra lygios')
}


