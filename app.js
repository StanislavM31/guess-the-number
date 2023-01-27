/* let a = +prompt("введите число от 1 до 100"); */

let a = Math.floor(Math.random()*100);
console.log(a);

function guessEnumeration(x){
    for (let i = 0; i <= 100; i++) {
        if(x==i){
            console.log(`BINGO! Вы загадали число ${i}`);
            return i;
        }
    }
}

let bingo = guessEnumeration(a);
console.log(bingo);

function guess(x) {
    let min = 0;
    let max = 100;
    for (let i = min; i <= max; ) {

        console.log(`min:${min} and max:${max} `);
        if(x==Math.round((max+min)/2)){
            console.log(`!!Вы загадали число ${Math.round((max+min)/2)}`);
            return Math.round((max+min)/2);
        } else if(x>Math.round((max+min)/2)){
            min = Math.round((max+min)/2);

        } else {
            max = Math.round((max+min)/2);
        }
    }
}
/* let r1 = 2;
let r2 = 7;
let r3 = 99; */

let rez = guess(a);

console.log(rez);
