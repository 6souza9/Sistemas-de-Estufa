const botaVentilacao = document.getElementById('botao_ventilação');
const botaoIluminacao = document.getElementById('botao_iluminacao');

let isOn = false;
let isOnn = false;

botaVentilacao.addEventListener('click', function() {
    isOn = !isOn;
    
    if (isOn) {
        botaVentilacao.textContent = 'Ligado';
        botaVentilacao.style.backgroundColor = 'green';
    } else {
        botaVentilacao.textContent = 'Desligado';
        botaVentilacao.style.backgroundColor = 'var(--desligado)';
    }
});

botaoIluminacao.addEventListener('click', function() {
    isOnn = !isOnn

    if (isOnn) {
        botaoIluminacao.textContent = 'Ligado';
        botaoIluminacao.style.backgroundColor = 'green';
    } else {
        botaoIluminacao.textContent = 'Desligado';
        botaoIluminacao.style.backgroundColor = 'var(--desligado)';
    }
});
