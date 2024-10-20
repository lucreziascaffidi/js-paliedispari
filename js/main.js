console.log('Sono connesso')

// Chiedere all’utente di inserire una parola
// Per questo scopo didattico utilizzo prompt per far si che l'utente possa inserire una parola a piacimento
// Inizializzo la variabile relativa alla parola che l'utente deve inserire e le assegno la stringa che forma la parola inserita dall'utente nel promt in cui appare la domanda "Inserisci una parola"
const userWord = prompt('Inserisci una parola');
// La leggo in console
console.log(userWord);

if (isPalindrome(userWord)) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma')
}

// Creare una funzione per capire se la parola inserita è palindroma (Una parola che letta al contrario ha una sequenza di catatteri che rimane invariata)

// Ci sono diversi metodi

// Metodo più performante secondo Gaetano: confrontare prima lettera con ultima lettera (se sono diverse allora non sono palindrome) e così via fino a che non finiscono le lettere da confrontare nel mezzo
/**
 * Description
 * @param {string} word
 * @returns {boolean} 
 */
function isPalindrome(word) {
    //casi limite
    if (word.length === 0) return false;
    if (word.length === 1) return true;

    // esecuzione
    let left = 0;
    let right = word.length - 1;
    while (left < right) {
        if (word[left] !== word[right]) {
            return false
        }

        left++;
        right--;
    }

    return true;
}


//Versione 1 con metodi built in di JS

if (isPalindrome2(userWord)) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma')
}

/**
 * Description
 * @param {string} word
 * @returns {boolean}
 */
function isPalindrome2(word) {

    //casi limite
    if (word.length === 0) return false;
    if (word.length === 1) return true;

    //esprimere la logica per la risoluzione del problema
    const reverseWord = word.toLocaleLowerCase().split('').reverse().join('');
    //trasformo la parola di partenza in lower case
    const lowerCaseWord = word.toLowerCase();

    return reverseWord === lowerCaseWord;


}


//Versione 2 con metodi built in di JS

const myWord = 'parola';

function isPalindrome3(word) {
    //casi limite
    if (word.length === 0) return false;
    if (word.length === 1) return true;

    let reverseWord = '';

    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    return reverseWord.toLowerCase() === word.toLowerCase();
}

isPalindrome3()