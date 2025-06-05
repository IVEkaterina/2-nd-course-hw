function guessNumber(programNumber) {
    while (true) {
        userNumber = Number(prompt("Попробуйте угать число от 1 до 100"))
        if (userNumber === programNumber) {
            alert("Молодец! Ты отгадал число")
            break
        } else {
            alert("Неправильно, попробуй ещё раз")
        }
    }
}