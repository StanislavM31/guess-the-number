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
/* let x = 73; */

function guess(x) {
    let min = 0;
    let max = 100;
    let i;
    for (i = min; i <= max; i++) {

        console.log(`min:${min} and max:${max} `);
        if(x==i){
            console.log(`BINGO!BINGO! Вы загадали число ${i}`);
            return i;
        }
        if(x>Math.floor(max/2)){
            min = Math.floor(max/2);

        } else{
            max = Math.floor(max/2);

        }
    }
}
let r = 28;
let rez = guess(r);

console.log(rez);
