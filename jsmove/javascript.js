function start() {
    var box = document.getElementById("box");
    var t = setInterval(move, 1);

    let direction = 0;
    let length = 150;
    let i = 0;
    let x = 0;
    let y = 0;

    const circleGen = (function* circle() {
        while (true) {
            switch (direction) {
                case 0: x++; break;
                case 1: y++; break;
                case 2: x--; break;
                case 3: y--; break;
            }
            i++;
            if (i === length) {
                i = 0;
                direction++;
                if (direction > 3) direction = 0;
            }
            yield { x, y };
        }
    })();

    function move() {
        const point = circleGen.next().value;
        box.style.left = point.x + "px";
        box.style.top = point.y + "px";
    }

}