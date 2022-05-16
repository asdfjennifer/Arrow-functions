// Übung lev1_1: Arrow Function
console.log("working?");

// function intro() {
//     console.log("Hello World");
// } 

// intro();

// intro = () => {
//     console.log("Hello World again");
// } 

// in eine Variable packen

// let Var1 = intro();

// Var1 = () => "Hello World again 2";
//=======================================================
// Übung lev1_2: functions

// Schreibe eine Funktion, die "Hallo" in deinem Browser (console oder HTML) anzeigt. 
// function intro() {
//     console.log("Hallo");
// }
// Schreibe eine Funktion, die die Summe von zwei Zahlen in deinem Browser (console oder HTML)  anzeigt.  (x=2; y=3)
// let x = 2;
// let y = 3;

// function sum() {
//     console.log(x + y);
// }

// sum();

//als Variable schreiben

let sum = (x, y) => console.log(x + y);
sum (2, 3);

//Parameter sind PLatzhalter
// müssen beim Calling angegeben werden

// let Var2 = sum();

// Var2 = () => console.log(x + y);
// Schreibe eine Funktion, die die Multiplikation von zwei Zahlen als Alert ausgibt. (x=2; y=3)

// function multiply() {
//     alert(x * y);
// }

// multiply();

// let multiply = (x, y) => alert(x * y);
// multiply(2, 3);
// Schreibe eine Funktion, die einen Parameter nimmt und den Typ dieses Elements in deinem Browser (console oder HTML) anzeigt. 

let i = true;
let j = "hi";
let k = 1;
let l = {name: "John"};
let a = [0, 1];

// function type() {
//     console.log(typeof i); //boolean
//     console.log(typeof j); //string
//     console.log(typeof k); //number
//     console.log(typeof l); //object
//     console.log(typeof a); //object
// }

// type();

let type = (i) => console.log(typeof i); 
type(i);
type = () => console.log(typeof j); 
type(j);
type = () => console.log(typeof k); 
type(k);
type = () => console.log(typeof l); 
type(l);
type = () => console.log(typeof a); 
type(a);
// Teste: i=true; j=”hi”; k=1; l={name:”John”}; a=[0,1]

// Dann konvertiere die normalen Funktionen in Arrow Funktionen.

//=======================================================
// Übung lev1_4: function hero
// Deklariere die Funktion hero() mit drei Parametern heroName, heroPower, heroEnemy und im Funktionskörper {}:
// Deklariere drei Variablen name, power und enemy.
// Weise den Variablen dann diese Werte zu: 
// Mein Lieblingsheld aus Marvel ist:
// Er/Sie hat die Fähigkeit:
// Sein/Ihr größter Gegner ist:
// Füge die passenden Parameter in die Variablen ein.
// Gib name + power + enemy in der Konsole aus.
// Ruf deine Funktion auf.
// Übergib Argumente für deine*n Lieblingsheld*in und gib diese in der Konsole aus.

let hero = (heroName, heroPower, heroEnemy) => {
    let name = heroName;
    let power = heroPower;
    let enemy = heroEnemy;
    console.log(heroName, heroPower, heroEnemy);
};

hero("Spiderman", "Spinnenweben ausstoßen", "Green Goblin");

// let VarHero = hero();

// console.log(`Mein Lieblingsheld aus Marvel ist ${name}, seine Fähigkeit ist: ${power} und sein größter Gegner ist ${enemy}. `)
//=======================================================
// lev1_6: function vs. variable
// In dieser Übung werden wir die Funktion mit der Variable vergleichen.
// Deklariere die Funktion returnOne() und in Funktionskörper {}:

let returnOne = () => {
    return 1;
}

let x = 1;
let y = returnOne();

if (x === y) {
    console.log("Wird das gedruckt?");
}
// Schreibe return 1; in den Funktionskörper
// Deklariere die Variable x mit Wert 1, außerhalb des funktionskörpers;
// Deklariere die Variable y mit Wert returnOne(), außerhalb des funktionskörper;
// Füge bitte ein.
// if (x === y) {
//   console.log("Wird das gedruckt?");
// }
// In diesem Code wird geschrieben: Wenn x gleich y ist, dann wird in der Konsole “Wird das gedruckt?” angezeigt. Wenn x ungleich y ist, dann es wird nicht angezeigt.

// Am Beispiel dieser Aufgabe lernst du, was der Unterschied zwischen Variablen und Funktionen ist.
//=======================================================
// lev 1_7
// Erstelle eine Funktion
// Diese soll einen Parameter haben
// Multipliziere den Parameter mit 2 
// Gib das Ergebnis mit Return zurück
// Schau dir das Ergebnis in der Konsole an!
// Versuche es weiter, bis du es schaffst. Viel Erfolg!

let myFunction = (x) => {
    return x*2;
}

console.log(myFunction(5));

// return beendet die Funktion, deshalb kommt das console.log außerhalb der Funktion hin
//=======================================================
// lev 1_8

// Eine Funktion zur Berechnung deines Alters.
// Definiere eine Funktion, die einen Parameter hat: yearBorn.
// In Funktionskörper nutze return um dein Alter zu berechnen und zurückzugeben.
// Gib dein Alter in der Konsole aus.

let thisFunction = (yearBorn) => {
    return 2022 - yearBorn;
}

console.log(thisFunction(1996));

//=======================================================
// lev 1_9

// Schreibe eine Funktion, die dich vorstellt und einen Text über dich ausgibt:
// mit den Parametern:
// vorname, nachname, geburtsort, alter, wohnort
// und der Funktionskörper soll in der Konsole folgendes ausgeben (nutze String concatenation): 
// "string text " + Parameter + " string text".
// Mein Name ist Baschar Shaheen. 
// Ich bin in Syrien geboren. 
// Ich lerne Coden bei SuperCode.
// Ich bin 34 Jahre alt. 
// Ich wohne in Düsseldorf.
// Vergiss nicht, die Funktion aufzurufen mit deinen Daten/Argumenten.

let thatsMe = (vorname, nachname, geburtsort, alter) => {
    console.log(`Mein Name ist ${vorname} ${nachname}`);
    console.log(`Ich bin in ${geburtsort} geboren.`);
    // console.log(`Ich lerne Coden bei SuperCode.``);
    console.log(`Ich bin ${alter} Jahre alt.`);
    // console.log(`Ich wohne in Düsseldorf.`);
}

thatsMe("Baschar", "Shaheen", "Syrien", "34");
