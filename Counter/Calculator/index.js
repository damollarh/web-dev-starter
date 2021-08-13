//assign the variables for the first two letters
let first = 8
let second = 2
document.getElementById("firstNum").textContent = first
document.getElementById("secondNum").textContent = second
let res = document.getElementById("result") 
function add() {
    sum=first+second
    res.textContent = "Sum is: " + sum
    
}

function sub() {
    sum = first - second
    res.textContent = "Sum is: " + sum
}

function mult() {
    sum = first*second
    res.textContent = "Sum is: " + sum
}

function div() {
    sum= first/second
    res.textContent = "Sum is: " + sum
}