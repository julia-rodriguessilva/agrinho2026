/* =========================
   AGRINHO 2026 - SCRIPT.JS
   ========================= */

/* =========================
   AOS
   ========================= */

AOS.init({
    duration: 1200,
    once: true
});

/* =========================
   CONTADORES ANIMADOS
   ========================= */

const counters = document.querySelectorAll('.counter');

const startCounters = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute('data-target');

        const updateCounter = () => {

            const current = +counter.innerText.replace(/,/g, '');

            const increment = target / 150;

            if (current < target) {

                counter.innerText =
                    Math.ceil(current + increment).toLocaleString('pt-BR');

                setTimeout(updateCounter, 15);

            } else {

                counter.innerText =
                    target.toLocaleString('pt-BR');
            }
        };

        updateCounter();

    });

};

let counterStarted = false;

window.addEventListener('scroll', () => {

    const statsSection = document.querySelector('.estatisticas');

    if (!statsSection) return;

    const sectionTop = statsSection.offsetTop;

    if (
        window.scrollY >
        sectionTop - window.innerHeight + 200
        &&
        !counterStarted
    ) {

        startCounters();
        counterStarted = true;
    }
});

/* =========================
   GRÁFICO CHART.JS
   ========================= */

const chartCanvas = document.getElementById('grafico');

if (chartCanvas) {

    new Chart(chartCanvas, {

        type: 'line',

        data: {

            labels: [
                '2018',
                '2019',
                '2020',
                '2021',
                '2022',
                '2023',
                '2024'
            ],

            datasets: [

                {
                    label: 'Áreas Preservadas (mil hectares)',

                    data: [
                        1100,
                        1180,
                        1250,
                        1320,
                        1450,
                        1580,
                        1700
                    ],

                    borderColor: '#99CD85',

                    backgroundColor:
                        'rgba(153,205,133,0.2)',

                    borderWidth: 4,

                    fill: true,

                    tension: 0.4
                }

            ]
        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    labels: {

                        color: '#ffffff'
                    }
                }
            },

            scales: {

                x: {

                    ticks: {
                        color: '#ffffff'
                    },

                    grid: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                },

                y: {

                    ticks: {
                        color: '#ffffff'
                    },

                    grid: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                }
            }
        }
    });
}

/* =========================
   PARTICLES.JS
   ========================= */

particlesJS('particles-js', {

    particles: {

        number: {
            value: 70,
            density: {
                enable: true,
                value_area: 900
            }
        },

        color: {
            value: '#99CD85'
        },

        shape: {
            type: 'circle'
        },

        opacity: {
            value: 0.4,
            random: true
        },

        size: {
            value: 5,
            random: true
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: '#99CD85',
            opacity: 0.2,
            width: 1
        },

        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out'
        }
    },

    interactivity: {

        detect_on: 'canvas',

        events: {

            onhover: {
                enable: true,
                mode: 'grab'
            },

            onclick: {
                enable: true,
                mode: 'push'
            }
        },

        modes: {

            grab: {
                distance: 180,
                line_linked: {
                    opacity: 0.5
                }
            },

            push: {
                particles_nb: 5
            }
        }
    },

    retina_detect: true
});

/* =========================
   NAVBAR TRANSPARENTE
   ========================= */

window.addEventListener('scroll', () => {

    const navbar =
        document.querySelector('.navbar');

    if (!navbar) return;

    if (window.scrollY > 100) {

        navbar.style.background =
            'rgba(0,0,0,0.85)';

        navbar.style.boxShadow =
            '0 5px 20px rgba(0,0,0,0.4)';

    } else {

        navbar.style.background =
            'rgba(0,0,0,0.4)';

        navbar.style.boxShadow = 'none';
    }

});

/* =========================
   EFEITO PARALLAX HERO
   ========================= */

window.addEventListener('scroll', () => {

    const hero =
        document.querySelector('.hero');

    if (!hero) return;

    hero.style.backgroundPositionY =
        `${window.scrollY * 0.4}px`;

});

/* =========================
   EFEITO NOS CARDS
   ========================= */

const cards =
    document.querySelectorAll(
        '.card, .stat-card, .acao'
    );

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.transform =
            'translateY(-10px) scale(1.03)';
    });

    card.addEventListener('mouseleave', () => {

        card.style.transform =
            'translateY(0) scale(1)';
    });

});

/* =========================
   TEXTO DIGITANDO
   ========================= */

const heroTitle =
    document.querySelector('.hero h1');

if (heroTitle) {

    const originalText =
        heroTitle.innerText;

    heroTitle.innerText = '';

    let i = 0;

    function typeWriter() {

        if (i < originalText.length) {

            heroTitle.innerHTML +=
                originalText.charAt(i);

            i++;

            setTimeout(typeWriter, 80);
        }
    }

    setTimeout(typeWriter, 500);
}

/* =========================
   BOTÃO VOLTAR AO TOPO
   ========================= */

const btnTop =
    document.createElement('button');

btnTop.innerHTML = '↑';

btnTop.id = 'btnTop';

document.body.appendChild(btnTop);

btnTop.style.position = 'fixed';
btnTop.style.bottom = '25px';
btnTop.style.right = '25px';
btnTop.style.width = '55px';
btnTop.style.height = '55px';
btnTop.style.border = 'none';
btnTop.style.borderRadius = '50%';
btnTop.style.background = '#99CD85';
btnTop.style.color = '#000';
btnTop.style.fontSize = '22px';
btnTop.style.cursor = 'pointer';
btnTop.style.display = 'none';
btnTop.style.zIndex = '9999';
btnTop.style.fontWeight = 'bold';
btnTop.style.boxShadow =
    '0 5px 15px rgba(0,0,0,0.4)';

window.addEventListener('scroll', () => {

    if (window.scrollY > 500) {

        btnTop.style.display = 'block';

    } else {

        btnTop.style.display = 'none';
    }

});

btnTop.addEventListener('click', () => {

    window.scrollTo({

        top: 0,
        behavior: 'smooth'
    });

});

/* =========================
   ANO AUTOMÁTICO RODAPÉ
   ========================= */

const footer =
    document.querySelector('footer p');

if (footer) {

    footer.innerHTML =
        `Projeto Agrinho ${new Date().getFullYear()} • Preservação Ambiental 🌿`;
}