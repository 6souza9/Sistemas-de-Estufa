function gerarDadosAleatorios() {
    const temperatura = Math.floor(Math.random() * (35 - 15) + 15); // Gera entre 15°C e 35°C
    const umidade = Math.floor(Math.random() * (90 - 30) + 30); // Gera entre 30% e 90%
    const luz = Math.floor(Math.random() * (1000 - 200) + 200); // Gera entre 200 lux e 1000 lux

    const temperaturaCard = document.querySelector('.temperatura');
    const umidadeCard = document.querySelector('.umidade');
    const luzCard = document.querySelector('.luz');
    
    const alarme = document.getElementById('alarme');
    const mensagemAlarme = document.getElementById('mensagem-alarme');
    let alarmeAtivado = false;

    // Atualiza os valores na interface
    document.querySelector('.temperatura .valor').textContent = `${temperatura}°C`;
    document.querySelector('.umidade .valor').textContent = `${umidade}%`;
    document.querySelector('.luz .valor').textContent = `${luz} lux`;

    // Lógica de status e cores para temperatura
    let temperaturaStatus;
    if (temperatura > 30) {
        temperaturaStatus = 'Alto';
        temperaturaCard.classList.add('critico');
        alarmeAtivado = true;
        mensagemAlarme.textContent = 'Alerta: Temperatura muito alta!';
    } else if (temperatura < 25) {
        temperaturaStatus = 'Baixo';
        temperaturaCard.classList.add('critico');
        alarmeAtivado = true;
        mensagemAlarme.textContent = 'Alerta: Temperatura muito baixa!';
    } else {
        temperaturaStatus = 'Estável';
        temperaturaCard.classList.remove('critico');
    }
    document.querySelector('.temperatura .status').textContent = temperaturaStatus;

    // Lógica de status e cores para umidade
    let umidadeStatus;
    if (umidade > 70) {
        umidadeStatus = 'Alta';
        umidadeCard.classList.add('critico');
        alarmeAtivado = true;
        mensagemAlarme.textContent = 'Alerta: Umidade muito alta!';
    } else if (umidade < 30) {
        umidadeStatus = 'Baixa';
        umidadeCard.classList.add('critico');
        alarmeAtivado = true;
        mensagemAlarme.textContent = 'Alerta: Umidade muito baixa!';
    } else {
        umidadeStatus = 'Moderada';
        umidadeCard.classList.remove('critico');
    }
    document.querySelector('.umidade .status').textContent = umidadeStatus;

    // Lógica de status e cores para luz
    let luzStatus;
    if (luz > 900) {
        luzStatus = 'Excesso';
        luzCard.classList.add('critico');
        alarmeAtivado = true;
        mensagemAlarme.textContent = 'Alerta: Luz em excesso!';
    } else if (luz < 300) {
        luzStatus = 'Baixo';
        luzCard.classList.add('critico');
        alarmeAtivado = true;
        mensagemAlarme.textContent = 'Alerta: Luz muito baixa!';
    } else {
        luzStatus = 'Suficiente';
        luzCard.classList.remove('critico');
    }
    document.querySelector('.luz .status').textContent = luzStatus;

    // Exibir ou ocultar o alarme
    if (alarmeAtivado) {
        alarme.classList.remove('oculto');
        alarme.classList.add('visivel');
    } else {
        alarme.classList.remove('visivel');
        alarme.classList.add('oculto');
    }
}

setInterval(gerarDadosAleatorios, 10000);
