// 1. Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).  La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

// var x = parseInt(prompt('inserisci posizione più piccolo'));
// var y = parseInt(prompt('inserisci posizione più grande'));
// var arrayUser = ['cane', 'pesce', 'cavallo', 'lumaca', 'asino', 'scimmia'];

// var newArray = rangeArray(x,y,arrayUser);
// console.log(newArray);

// //funzione

// function rangeArray(a,b,array){
//     console.log(a);
//     console.log(b);
//     var c = [];

//     if(a>b){ /* swap */
//         var temp = a;
//         a = b;
//         b = temp;
//     }

//     for(var i=a+1; i<b; i++){
//         c.push(array[i]);
//     }
//     return c;
// }

//========================================================================================
// 2. Dare la possibilità di inserire due parole. 
//        Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.    Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

// var x = prompt('inserisci prima parola');
// var y = prompt('inserisci seconda parola');

// var pLunga = parolaLunga(x,y);
// console.log(pLunga);

// // funzione

// function parolaLunga(a,b){
//     if(a.length>b.length){
//         return a;
//     } else if (a.length<b.length){
//         return b;
//     } else {
//         return a + ' ' + b;
//     }
// }

//========================================================================================
// 3.  Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// var array1 = ['a','b','c'];
// var array2 = [1,2,3];
// var arrayUnito = arraySomma(array1, array2);

// console.log(arrayUnito);

// // funzione

// function arraySomma(arrayA,arrayB){
//     var arraySum = [];
//     if(arrayA.length == arrayB.length){
//         for(var i=0; i<arrayA.length; i++){
//             arraySum.push(arrayA[i], arrayB[i]);
//         }    
//         return arraySum;
//     } else {
//         alert('La lunghezza dei due array deve essere uguale');
//     }
// }

//========================================================================================
// 4. Scrivi una funzione che prenda una stringa e la trasformi con l'iniziale maiuscola e tutto il resto in minuscolo.

var parolaCap = capitalize(prompt('inserisci parola da capitalizzare'));
console.log(parolaCap);

//funzione

function capitalize(str){
    var str;    
    var prima = str[0].toUpperCase();
    // console.log(prima);
    var resto = str.slice(1).toLowerCase();
    // console.log(resto);
    return prima+resto;
}
