

window.addEventListener('load', function(event) {
    console.log('A página terminou de carregar!');
});

window.addEventListener('load', function(event) {
    console.log('A página terminou de carregar2!');
});


function processar() {
    console.log('vamos começar a processar!');

    let A = document.querySelector('#A').value;
    let B = document.querySelector('#B').value;
    let C = document.querySelector("#C").value;
    let D = B**2 - (4 * A * C);
    let x1, x2;
    if (D >= 0) {
        x1 = (-B + Math.sqrt(D)) / (2*A);
        x2 = (-B - Math.sqrt(D)) / (2*A);
        document.querySelector("#div").innerHTML = `Valor de Delta: ${D}<br/>Valor de X1: ${x1} <br/>Valor de X2: ${x2}`;
    } else {
        document.querySelector("#div").innerHTML = `Valor de Delta: ${D}`;
    }

}












