square.onclick = function () {
    let m=10;

    let timer = setInterval(function () {
        m = m + 10
        square.style.left = m + "px"

        if (m > 1420) clearInterval(timer);
        
    }, 25);

    square = f
    
}