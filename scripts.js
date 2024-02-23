document.getElementById('joinBtn').addEventListener('click', function() {
    window.location.href = 'https://chat.whatsapp.com/EI1kmZ9avDUD6ox7Iry6Fm'; 
});

const mosquito = document.getElementById('mosquito');

function voar() {
    const x = Math.random() * (window.innerWidth - mosquito.offsetWidth);
    const y = Math.random() * (window.innerHeight - mosquito.offsetHeight);
    mosquito.style.transform = `translate(${x}px, ${y}px)`;
}

setInterval(voar, 3000); 