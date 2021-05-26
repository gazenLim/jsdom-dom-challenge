let counter = document.getElementById('counter')
let increaseCounter = setInterval(increase, 1000)







function increase(){
    counter.innerText = parseInt(counter.innerText) + 1;
}