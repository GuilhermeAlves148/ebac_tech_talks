AOS.init();

const dataEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampEvento = dataEvento.getTime();

const ContaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    const distanciaEvento = timeStampEvento - timeStampAgora;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minEmMs = 1000 * 60;

    const diasEvento = Math.floor(distanciaEvento / diaEmMs);
    const horasEvento = Math.floor((distanciaEvento % diaEmMs) / horaEmMs);
    const minEvento = Math.floor((distanciaEvento % horaEmMs) / minEmMs);
    const segsEvento = Math.floor((distanciaEvento % minEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasEvento}d ${horasEvento}h ${minEvento}m ${segsEvento}s`;

    if (distanciaEvento < 0) {
        clearInterval(ContaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000);