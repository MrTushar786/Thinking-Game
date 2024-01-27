let text = document.getElementById('text');
let next = document.getElementById('next');
let current = 0;
next.addEventListener('click', () => {
    switch (current) {
        case 0:
            text.innerHTML = "THINK A NUMBER";
            document.body.style.background = "url('motion1.gif') no-repeat";
            document.body.style.backgroundSize = "cover";
            document.body.style.backdropFilter = "blur(10px)";
            next.innerHTML = "NEXT";
            current = 1;
            break;

        case 1:
            text.innerHTML = "DOUBLE IT";
            current = 2;
            break;
        case 2:
            text.innerHTML = "ADD 20";
            current = 3;
            break;
        case 3:
            text.innerHTML = "HALF NUMBER";
            current = 4;
            break;
        case 4:
            text.innerHTML = "REMOVE NUMBER YOU THINK";
            text.style.fontSize = "27.11px";
            current = 5;
            break;
        case 5:
            text.innerHTML = "YOU NUMBER IS 10";
            document.body.style.background = "url('last.gif') no-repeat";
            document.body.style.backgroundSize = "cover";
            document.body.style.backdropFilter = "blur(10px)";
            next.innerHTML = "RESTART GAME"
            current = 0;
            break;
    }
})