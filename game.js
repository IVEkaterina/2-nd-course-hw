function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomInt = getRandomInt(1, 100);

function guessNumber(programNumber) {
    while (true) {
        userNumber = Number(prompt("Попробуйте угать число от 1 до 100"))
        if (userNumber === programNumber) {
            alert("Молодец! Ты отгадал число")
            break
        } else if (userNumber < programNumber){
            alert("Загаданное число больше")
        } else if (userNumber > programNumber){
            alert("Загаданное число меньше")
        } else {
            alert("Неправильно, попробуй ещё раз")
        }
    }
}