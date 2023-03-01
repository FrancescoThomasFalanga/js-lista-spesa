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


while (index < listaSpesa.length) {

    document.writeln(listaSpesa[index] + "<br>");
    index++

}