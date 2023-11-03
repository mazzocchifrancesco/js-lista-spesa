// variabili iniziali
const elenco = ["pane", "latte", "uova", "sale", "birrette", "capsule caffe", "crocchette gatti"];
const contenitore = document.getElementById("listContainer");
const addBtn = document.getElementById("btn");
let i = 0;
let prodotto=""

// creazione unList

const unList = document.createElement("ul");
contenitore.append(unList);

 // stampa elenco INIZIALE, da array
do {
            
    prodotto = elenco[i]
    console.log(prodotto);

    // crea e aggiunge unordered list

    const li = document.createElement("li");
    li.innerText=prodotto;
    unList.append(li);
    i++
    
    
} while (i < elenco.length);

// bottone aggiunta elementi

addBtn.addEventListener("click", function () {

    let newEl = document.getElementById("newElement").value;

    // check se la stringa è vuota

    if (newEl!="") {

        // aggiungi nuovo elemento
        elenco.push(newEl);
        
        // stampa elenco
        do {
            
            prodotto = elenco[i]
            console.log(prodotto);

            // crea e aggiunge unordered list

            const li = document.createElement("li");
            li.innerText=prodotto;
            unList.append(li);
            i++;

        } while (i < elenco.length);
        
    }

    // clear input
    document.getElementById("newElement").value="";

    })