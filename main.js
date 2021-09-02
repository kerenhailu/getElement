// --------------------------------1
const but = document.getElementById("btn")
but.addEventListener("click", function () {
    console.log("clicked");
    let text = but.innerText
    but.innerText = "click me"
})
const clickText = document.getElementById("textP")
clickText.addEventListener("click", function () {
    console.log("the text clicked");
    const test = clickText.innerText
    clickText.innerText = "you click here"
})
// --------------------------------2
const one = document.getElementById("textOne")
one.addEventListener("click", function () {
    console.log("text one clicked");
    const text1 = one.innerText
    one.innerText = "text1"
})
const two = document.getElementById("textTwo")
two.addEventListener("click", function () {
    console.log("text two clicked");
    const text2 = two.innerText
    two.innerText = "text2"
})
// --------------------------------3
const INPUT = document.getElementById("input")
INPUT.value = ""
const btnSEND = document.getElementById("btnSenD")
btnSEND.addEventListener("click", function () {

    console.log(INPUT.value);
})
// --------------------------------4
const pFOUR = document.getElementById("pFour")
const four = document.getElementById("askFour")
four.addEventListener("click", function () {
    console.log("click");
    const text = pFOUR.innerText
    pFOUR.innerText = "hello"
})
// --------------------------------5
const frutBtn = document.getElementById("btnFrut")
frutBtn.addEventListener("click", function () {

    console.log(select.value);
})
const select = document.getElementById("frut")
select.addEventListener("click", function () {

})
// --------------------------------6
// const car1 = document.getElementById("Hyundai")
// car1.addEventListener("click", function () {
// console.log(car2.innerText);
// })
// const car2 = document.getElementById("Honda")
// car2.addEventListener("click", function () {
//     console.log(car3.innerText);
// })
// const car3 = document.getElementById("Fiat")
// car3.addEventListener("click", function () {
//     console.log(car4.innerText);
// })
// const car4 = document.getElementById("Diatsu")
// car4.addEventListener("click", function () {
//     console.log(car1.innerText);
// })
// --------------------------------6 סוג תשובה שונה
const cars = document.getElementsByClassName("car")
for (let i = 0; i < cars.length; i++) {
    
        cars[i].addEventListener("click", function () {
            console.log(cars[i].innerText);
        })
    
}
// --------------------------------7
const changeText = document.getElementById("theText")
changeText.addEventListener("click", function () {
    const text = changeText.innerText
    changeText.innerText = "clicked"
})
// --------------------------------8
const inputAndB = document.getElementById("inputAndBtn")
const bAndI = document.getElementById("btnAndInput")
bAndI.addEventListener("click", function(){
    console.log(inputAndB.value.length);
    
})



