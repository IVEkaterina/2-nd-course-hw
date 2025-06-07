// Задание 1

const getMin = (number1, number2) => {
    if (number1 > number2) {
        return number2
    } else if (number1 === number2) {
        return number1
    } else {
        return number1
    }
}

console.log(getMin(2, 4))
console.log(getMin(4, 4))
console.log(getMin(6, 4))


// Задание 2

function isEven(number) {
	if (number % 2 === 0) {
        return "Число четное"
    } else {
        return "Число нечетное"
    }
}

console.log(isEven(2))
console.log(isEven(3))


// Задание 3

function getSquare(number) {
    console.log(number ** 2)
    return number ** 2
}

let square5 = getSquare(5);
console.log(getSquare(5))
console.log(square5)


// Задание 4

function getGreeting(age) {
    if (age < 0) {
        return "Вы ввели неправильное значение"
    } else if (age >= 0 && age <=12) {
        return "Привет, друг!"
    } else {
        return "Добро пожаловать!"
    }
}

let age = Number(prompt("Сколько вам лет?"))

console.log(getGreeting(age))


// Задание 5

function isType(number1, number2) {
    if (typeof(number1) === "number" && typeof(number2) === "number") {
        return number1 * number2
    } else {
        return "Одно или оба значения не являются числом"
    }
}

console.log(isType(1, 3))
console.log(isType("2", 6))
console.log(isType("2", "4"))


// Задание 6

function getCube() {
    userNumber = prompt("Введите число")
    if (isNaN(userNumber)) {
        return "Переданный параметр не является числом"
    } else {
        return `${userNumber} в кубе равняется ${userNumber ** 3}`
    }
}

console.log(getCube())  


// Задание 7

function getArea(radius) {
    return 3.14*(this.radius**2)
}

function getPerimeter(radius) {
    return 2*3.14*this.radius
}

const circle1 = {
    radius: 3,
    area: getArea,
    perimeter: getPerimeter
}

const circle2 = {
    radius: 2,
    area: getArea,
    perimeter: getPerimeter
}

console.log(circle1.area())
console.log(circle1.perimeter())
console.log(circle2.area())
console.log(circle2.perimeter())