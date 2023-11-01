function display(val){

    document.getElementById("result").value += val

    return val;

}
function clearScreen(){

    document.getElementById('result').value = ''

}
function backspace() {
    result.value = result.value.slice(0, -1)
}

function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}
const res=document.getElementById('result')
function handleNumberKeyPress(event) {
    const key = event.key;

   
    if (/^[0-9]$/.test(key)) {
       
        res.value += key;
    }
}


document.addEventListener("keydown", handleNumberKeyPress);





const res1=document.getElementById('result')
function handleNumberKeyPress(event) {
    const key = event.key;

    
    if (!/^[0-9]$/.test(key)) {
       
        alert("Only numbers are allowed")
    }
}


document.addEventListener("keydown", handleNumberKeyPress);