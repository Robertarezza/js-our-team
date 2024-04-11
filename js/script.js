// //test
// alert("Ciao");

//MILESTONE 0
//CREA ARRAY DI OGGETTI CON LE INFORMAZIONI

const infoPerson = [
    {
        img : "wayne-barnett-founder-ceo.jpg",
        name : "Wayne Barnett",
        profession : "Founder & CEO"
    },
    {
        img : "angela-caroll-chief-editor.jpg",
        name : "Angela Carolo",
        profession : "Chief Editor"
    },
    {
        img : "walter-gordon-office-manager.jpg",
        name : "Walter Gordon",
        profession : "Office Manager"
    },
    {
        img : "angela-lopez-social-media-manager.jpg",
        name : "Angela Lopez",
        profession : "Social Media Manager"
    },
    {
        img : "scott-estrada-developer.jpg",
        name : "Scott Estrada",
        profession : "Developer"
    },
    {
        img : "barbara-ramos-graphic-designer.jpg",
        name : "Barbara Ramost",
        profession : "Graphic Designer"
    }
]


//MILESTONE 1
//STAMPARE IN CONSOLE LE INFO DI NOME RUOLO E IMG DI OGNI MEMBRO

for (let i = 0; i < infoPerson.length; i++) {
    const curInfoPerson =infoPerson[i] //object
    //console.log(curInfoPerson);
    console.log("----------------------");

    for (let key in curInfoPerson) {
        console.log(curInfoPerson[key]);
    }
}