// //test
// alert("Ciao");

//MILESTONE 0
//CREA ARRAY DI OGGETTI CON LE INFORMAZIONI

///queste create per prendere gli elem input
const nameInput = document.getElementById("name");
const ruoloInput = document.getElementById("ruolo");
//const nameInput = document.getElementById("name")

const infoPerson = [
    {
        img: "wayne-barnett-founder-ceo.jpg",
        name: "Wayne Barnett",
        profession: "Founder & CEO"
    },
    {
        img: "angela-caroll-chief-editor.jpg",
        name: "Angela Carolo",
        profession: "Chief Editor"
    },
    {
        img: "walter-gordon-office-manager.jpg",
        name: "Walter Gordon",
        profession: "Office Manager"
    },
    {
        img: "angela-lopez-social-media-manager.jpg",
        name: "Angela Lopez",
        profession: "Social Media Manager"
    },
    {
        img: "scott-estrada-developer.jpg",
        name: "Scott Estrada",
        profession: "Developer"
    },
    {
        img: "barbara-ramos-graphic-designer.jpg",
        name: "Barbara Ramost",
        profession: "Graphic Designer"
    }
]


/////BONUS
// let img1 = infoPerson[0].img;
// let img = document.createElement('img');
// img.src = img1;
// document.getElementById('pictures').appendChild(img)


//MILESTONE 1
//STAMPARE IN CONSOLE LE INFO DI NOME RUOLO E IMG DI OGNI MEMBRO

printTeam(infoPerson);

///la funzione al posto di qst
// for (let i = 0; i < infoPerson.length; i++) {
//     const curInfoPerson = infoPerson[i] //object
//     //console.log(curInfoPerson);
//     console.log("----------------------");


//     for (let key in curInfoPerson) {
//         console.log(curInfoPerson[key]);

//     }


//     ///MILESTONE 2 + /////BONUS 1 + BONUS 2
//     //STAMPA NEL DOM TUTTE LE INFO


//qui invece no = ma += perche non ho usato append
//     document.getElementById("stampa").innerHTML += `
//    <div class="col col-md-6 col-lg-4 ">          
//         <div class="card mb-5">
//         <img src="./img/${curInfoPerson.img}"></img>
//             <div class="card-body ">
//                 <h5 class="card-title text-center fs-2"> ${curInfoPerson.name}</h5>
//                 <p class="card-text text-center fs-4  fst-italic">${curInfoPerson.profession}</p>
//             </div> 
//         </div>
//     </div>`;

// }

/////fino a qui


///super bonus
//creare un form tramite il quale si potra aggiungere menbri del team
//al click sul bottone
// prelevare dati dal form
//creare l'oggetto del nuovo menbro
//aggiungere il membro nell'array
//stampare il nuovo membro in pagina
//ripulire i campi del form

const formEleme = document.getElementById("new-membre-form");
formEleme.addEventListener("submit", addMember);

function addMember(event) {
    event.preventDefault();
const newName = nameInput.value;
const nuwProfession = ruoloInput.value;


///crei ogg nuovo membro

const newMeber = {

    name: newName,
    profession:  nuwProfession,
}

///aggiuni nuovo membro nell array

infoPerson.push(newMeber);

//richiamo funzione stampa
creatCol(newMeber)
// const rowElem = document.querySelector(".row")

// //creo il div colonna
// const colElem = document.createElement("div")
// //assegno classe col al div e
// colElem.classList.add("col")
// //qui non uso += perchè uso appendo
// //poi inserisco la card tramite innerHtml
// colElem.innerHTML= ` 
// <div class="card mb-5">
//     <img src="./img/${newMeber.img}"></img>
//         <div class="card-body ">
//             <h5 class="card-title text-center fs-2"> ${newMeber.name}</h5>
//             <p class="card-text text-center fs-4  fst-italic">${newMeber.profession}</p>
//         </div> 
//     </div>
// `
// //appendo la colonna alla row
// rowElem.append(colElem)


//ripulire campi
// nameInput.value = "";
// ruoloInput.value = "";
// //oppure
this.reset(); ///cosi resetti tutti campi del form

}