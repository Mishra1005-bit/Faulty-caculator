// Faulty calculator using js :
let   random = Math.random()
let a = num1 = prompt("Enter the first number :")
let c = num2 = prompt("Enter the operation :")         
let b = num3 = prompt("Enter the second number :")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}
console.log(random )
if (random > 0.1) {
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}
else {
    c=obj(c)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}