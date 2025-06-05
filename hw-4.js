let i = 0;

while (i<2) {
    console.log("Привет")
    i++
}


let r = 1;

while (r<=5) {
    console.log(r)
    r++
}


let p = 7;

while (p<=22) {
    console.log(p)
    p++
}


const obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
}

for (let key in obj) {
   console.log(`${key} — зарплата ${obj[key]} долларов.`);
}


let n = 1000;
let num = 0;

while (n>50) {
    n /= 2
    num++
}

console.log(`Результат: ${n}`)
console.log(`Количество итераций: ${num}`)


let firstFriday = 1;

while (firstFriday <= 31) {
    console.log(`Сегодня пятница, ${firstFriday} число. Необходимо подготовить отчет.`)
    firstFriday += 7
}
