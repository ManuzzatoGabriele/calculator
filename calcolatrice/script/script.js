// dichiarazione variabili globali fondamentali
let n1 = '';
let n2 = '';
let tipo = true;
let risultato = 0;
let opr = '';

//visualizza dati sul display
function visualizza(n) {
    // se non è ancora stato inserito l'operatore salva il dato come primo addendo
    if (tipo === true) {
        // visualizzazione
        document.getElementById('operazione').innerHTML += n
        // concateno in una stringa i dati del primo addendo
        n1 = `${n1}${n}`;
        // altrimenti sul secondo
    } else {
        n2 = `${n2}${n}`;
        document.getElementById('operazione').innerHTML += n
    }
}

// controllo se l'operatore è valido
function operatore(op) {
    // se è già stato inserito un operatore segnalo un errore
    if (tipo === false) {
        alert("inserire un'operazione per volta, premere =")
    } else {
    // controllo se è stato inserito un primo addendo prima dell'operatore
    if ( n1 === '') {
        // fa eccezione la radice quadrata perchè antecede l'addendo
        if (op != '√') {
            alert("inserire un numero prima dell'operatore")
        } else {
            document.getElementById('operazione').innerHTML += op;
            opr = op   
        } 
    } else {
        // se è valido lo visualizzo sul display e posso procedere
        document.getElementById('operazione').innerHTML += op;
        opr = op
        tipo = false;
    }
}
}

// funzione di calcolo operazione
function calcolo() { 
    // trasformo le stringhe in dati numerici   
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    // attraverso lo switch pongo un caso per ciascun operatore
    switch(opr) {
        case '+':
            risultato = n1 + n2;
            break;
        case '-': 
            risultato = n1 - n2;
            break;
        case '×':
            risultato = n1 * n2;
            break;
        case '÷':
            if (n2 === 0) {
                alert('impossibile dividere per zero');
            } else {
                risultato = n1 / n2;
            }
            break;
        case '√':
            risultato = Math.sqrt(n1);
            break;
        case '^':
            risultato = n1 ** n2;
            break;
        default:
            alert("inserire operatori");
        
        
    }
    // controllo se il risultato è valido (se è stato inserito il secondo addendo)
    if (!isNaN(risultato)) {
        // aggiungo un ulteriore controllo per visualizzare le prime due cifre decimali se ci fossero
        if (risultato != parseInt(risultato)) {
            document.getElementById('operazione').innerHTML = risultato.toFixed(2);
        } else {
            // altrimenti non le visualizzo
            document.getElementById('operazione').innerHTML = risultato;
        }
        // posso continuare a eseguire i caloli a partire dal risultato
        n1 = risultato;
        n2 = '';
        tipo = true;
    } else {
        alert('errore di inserimento input');
    }
    
}


// resetta tutti i possibili valori dati in input
function cancella() {
    n1 = '';
    n2 = '';
    tipo = true;
    risultato = 0;
    opr = '';
    document.getElementById('operazione').innerHTML = '';
    document.getElementById('risultato').innerHTML = '';
}