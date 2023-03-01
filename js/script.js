/*
Data una lista della spesa (memorizzata in un array), 
stampare sulla pagina (anche brutalmente, basta che si vedano) 
gli elementi della lista individualmente con un ciclo while.
*/

/*
- creare una lista della spesa
- stampare la lista della spesa in console
- stampare individualmente gli elementi in pagina
*/




// creo lista della spesa
let listaSpesa = ["Pane", "Arance", "Latte", "Lattuga", "Pomodori", "Prosciutto", "Bibite", "Detergente", "Spaghetti", "Pesce", "Formaggio", "Ceci", "Piselli", "Uova", "Succo", "Caffè", "Tonno", "Cereali", "Biscotti" ,"Piatti di Carta"];
// creo variabile sentinella inizializzate = 0
let index = 0;

console.log(listaSpesa);

// per stilizzare la mia listaSpesa inizio con l'inizializzare il contenitore di questi
let listEl = document.getElementById("list");

let buttonListGeneratorEl = document.getElementById("buttonListGenerator");

buttonListGeneratorEl.addEventListener("click", function() {

    while (index < listaSpesa.length) {
        // creo tanti elementi li quanti sono gli elementi della spesa
        let newLiElement = document.createElement("li");
        
        // faccio riferimento al genitore
        listEl.append(newLiElement);
        
        // aggiungo a tutti gli elementi create la classe list-item stilizzata in CSS
        newLiElement.classList.add("list-item");
    
        // scrivo il contenuto, all'interno del DOM
        newLiElement.innerHTML = (listaSpesa[index] + "<br>")
    
    
        // per ogni volta che fa il controllo, index dovrà aumentare di 1: 0-1-2-3-4-5-6...
        index++;
    
    }

})
