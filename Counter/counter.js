let dispEl=document.getElementById("disp")
let count = 0
let saveEl=document.getElementById("save-el")

function increment() {
    count=count+1
    dispEl.textContent=count
    console.log(dispEl)
}

function save() {
    saveEl.textContent+=count + " - "
    console.log(count)
    dispEl.textContent=0
    count = 0
}
