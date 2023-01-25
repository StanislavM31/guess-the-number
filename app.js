/* let a = +prompt("введите число от 1 до 100"); */

let a = Math.floor(Math.random()*1000);
console.log(a);

function guessEnumeration(x){
    for (let i = 0; i <= 1000; i++) {
        const element = i;
        if(x==i){
            console.log(`BINGO! Вы загадали число${i}`);
            return i;
        }
    }
}

let bingo = guessEnumeration(a);
console.log(bingo);