/**
 * Description: STAMPARE IN CONSOLE LE INFO DI NOME RUOLO E IMG DI OGNI MEMBRO
 * @param {array} teamToPrint //array di oggetti
 */
function printTeam(teamToPrint) {
    //questo lo prendi sempre perchè usi append
    const rowElem = document.querySelector(".row")
    ////////////////////////////////////////////////////
    for (let i = 0; i < teamToPrint.length; i++){
        const curMenber = teamToPrint[i];
console.log("--------------------");
    //     for( let key in curMenber){
    //         console.log(key, curMenber[key]);
    //     }
    console.log("nome", curMenber.name);
    console.log("professione", curMenber.profession);
    console.log("immagine", curMenber.img);

    // //creo il div colonna
    // const colElem = document.createElement("div")
    // //assegno classe col al div e
    // colElem.classList.add("col")
    // //qui non uso += perchè uso appendo
    // //poi inserisco la card tramite innerHtml
    // colElem.innerHTML= ` 
    // <div class="card mb-5">
    //     <img src="./img/${curMenber.img}"></img>
    //         <div class="card-body ">
    //             <h5 class="card-title text-center fs-2"> ${curMenber.name}</h5>
    //             <p class="card-text text-center fs-4  fst-italic">${curMenber.profession}</p>
    //         </div> 
    //     </div>
    // `
    // //appendo la colonna alla row
    // rowElem.append(colElem)

        creatCol(curMenber)
     }
}

/**
 * Description
 * @param {object} memberToPrint
 */
function creatCol(memberToPrint) {
    const rowElem = document.querySelector(".row")

//creo il div colonna
const colElem = document.createElement("div")
//assegno classe col al div e
colElem.classList.add("col")
//qui non uso += perchè uso appendo
//poi inserisco la card tramite innerHtml
colElem.innerHTML= ` 
<div class="card mb-5">
    <img src="./img/${memberToPrint.img}"></img>
        <div class="card-body ">
            <h5 class="card-title text-center fs-2"> ${memberToPrint.name}</h5>
            <p class="card-text text-center fs-4  fst-italic">${memberToPrint.profession}</p>
        </div> 
    </div>
`
//appendo la colonna alla row
rowElem.append(colElem)
}