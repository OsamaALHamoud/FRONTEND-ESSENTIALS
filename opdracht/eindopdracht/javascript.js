// var age = prompt("Please enter your age",);
//vragen aan bezoeker
//opslaan in object
// let getaal = 50;

let persoon ={
    voornaam: prompt("Wat is je voornaam?"),
    achterNaam: prompt ("wat is je achternaam"),
    age: prompt ("wat is je leeftijd")
    
}


let age = persoon.age;
    
    // todo: andere propertiesosamk



//gegevens van object persoon in tabel zetten



document.getElementById("naam").innerHTML = persoon.voornaam+" "+persoon.achterNaam,

console.log(persoon.voornaam+" "+persoon.achterNaam+persoon.age);



//gegevens van object persoon tonen in de console
// check op persoon.leeftijd ipv age
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


