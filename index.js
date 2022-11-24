let divs = document.querySelectorAll('.item');

for (let i = 0; i < divs.length; i++) {
    divs[i].style.background = "red";
    divs[i].style.width = "300px";
}

// цикл в цикле

let score = document.querySelector('.score');

for (let i = 1; i < 10; i++) {
    score.innerHTML += `умножаем на ${i} <br>`;
    // i = 0;
    for (let k = 1; k < 10; k++) {
        score.innerHTML += `${k} * ${i} = ${k * i} <br>`;
    }
    score.innerHTML += "<br>"
}