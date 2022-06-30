//patikrinti kokie yra skaicaii lyginiai ar nelyginiai
// skaiciai paimami is <input> laukeliu paspaudus mygtuka <button>
// i div, class = rezultatas isvedame teksta "skaicius yra lyginis", kitu atveju skaicius yra nelyginis

//kazkaip pasirinkti elementa <button>, id x
//sekti ar mygtukas spaudziamas(event listening - click event) x
// paimame reiksmes is input, pagal id, elementus atskiria pagal id ir klase x
//atliekame tikrinimo veiksma
// isvedame rezultata i div



document.querySelector('#patvirtinti').addEventListener('click', function(){
    console.log("mygtukas paspaustas");

    //vienodo kintamuju vardu principo
    let skaicius1;
    let skaicius2;

    // nesvarbu kad ivedame skaiciu, kompiuteris ji supranta kaip teksta
    skaicius1 = parseFloat(document.querySelector('#skaicius1').value) ;
    skaicius2 = parseFloat(document.querySelector('#skaicius2').value) ;

    if(skaicius1 % 2 == 0) {
        //append - nuolat prikabina
        //innerHTML
        // document.querySelector('.rezultatas').append('Skaicius1 yra lyginis');
        document.querySelector('.rezultatas').innerHTML = "Skaicius1 yra lyginis";

        // console.log('Skaicius1 yra lyginis');
    } else {
        // document.querySelector('.rezultatas').append('Skaicius1 yra nelyginis');
        document.querySelector('.rezultatas').innerHTML = "Skaicius1 yra nelyginis";

        // console.log('Skaicius1 yra nelyginis');
    }

    if(skaicius2 % 2 == 0) {
        document.querySelector('.rezultatas').append('Skaicius2 yra lyginis');
// 
        // console.log('Skaicius2 yra lyginis');
    } else {
        document.querySelector('.rezultatas').append('Skaicius2 yra nelyginis');
    }



    // console.log(skaicius1);


});