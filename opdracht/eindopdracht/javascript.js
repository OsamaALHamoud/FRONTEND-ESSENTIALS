// var age = prompt("Please enter your age",);
//vragen aan bezoeker
//opslaan in object
// let getaal = 50;



let persoon ={
    voornaam: prompt ("Wat is je voornaam?"),
    achternaam: prompt ("wat is je achternaam"),
    age: prompt ("wat is je leeftijd"),
    email: prompt("vul u E-mail  Adres in"),
    woonplaats : prompt (" Vul u woonplaats in "),

} 

let age = persoon.age;
    
// koptext
document.getElementById("naam").innerHTML = persoon.voornaam+" "+ persoon.achternaam;


//  in de table

document.getElementById("voornaam").innerHTML = persoon.voornaam;
document.getElementById("achternaam").innerHTML = persoon.achternaam;
document.getElementById("leeftijd").innerHTML = persoon.age;
document.getElementById("email").innerHTML = persoon.email;
document.getElementById("woonplaats").innerHTML = persoon.woonplaats;



// laat alle gegevns op console zine 

console.log(persoon);



// als gbruker laat zijn leeftijd dan veranderd naar andere kluer 


if (age == 16) {
document.querySelector("body").style.backgroundColor = "orange";

}
 
else if (age == 17) {
    document.querySelector("body").style.backgroundColor = "blue";
}    



else if (age == 18) {
    document.querySelector("body").style.backgroundColor = "gold";
}    



else if (age == 19) {
    document.querySelector("body").style.backgroundColor = "red";
 
}
else {document.querySelector("body").style.backgroundColor = "green"}


