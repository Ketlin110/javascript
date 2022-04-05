let dia = 3;
let diaNome = '';

switch (dia) {
    case 1:
        diaNome = 'Segunda-Feira';
        break;
    case 2:
        diaNome = 'Terça-Feira';
        break;
    case 3:
        diaNome = 'Quarta-Feira';

    case 4:
        diaNome = 'Quinta-Feira';
        break;
    case 5:
        diaNome = 'Sexta-Feira';

    case 6:
        diaNome = 'Sabado';
        break;
    case 7:
        diaNome = 'Domingo';

}

document.getElementById("dia").innerHTML = "Hoje é:" + diaNome;
console.log(diaNome);