document.addEventListener("DOMContentLoaded", function() {
    const timerElements = document.querySelectorAll('.timer');
    const section = document.getElementById('plataformas');
    let activated = false;

    function updateCounter(timerElement, targetValue) {
        let currentValue = 0;
        const increment = Math.ceil(targetValue / 100); 

        function update() {
            if (currentValue < targetValue) {
                currentValue += increment;
                if (currentValue > targetValue) {
                    currentValue = targetValue; 
                }
                timerElement.textContent = currentValue;
            }
        }

        setInterval(update, 50); 
    }

    function checkScroll() {
        if (!activated) {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top <= windowHeight * 0.75) { 
                activated = true;
                timerElements.forEach(function(timerElement) {
                    const targetValue = parseInt(timerElement.dataset.target);
                    updateCounter(timerElement, targetValue);
                });
            }
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});

document.addEventListener("DOMContentLoaded", function() {
    syncButtonActivityAcrossDivs();
});

function syncButtonActivityAcrossDivs() {
    const allButtons = document.querySelectorAll(".button-plan");

    allButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const tabButton = button.dataset.tabButton;
            showOptionContent(tabButton);
            activateCorrespondingButtons(tabButton, button);
        });
    });
}

function showOptionContent(option) {
    const contents = document.querySelectorAll(".preco-detalhado");
    contents.forEach(function(content) {
        content.classList.remove("active");
    });

    const selectedContent = document.getElementById(option);
    if (selectedContent) {
        selectedContent.classList.add("active");
    }
}

function activateCorrespondingButtons(tabButton, selectedButton) {
    const allButtons = document.querySelectorAll(".button-plan");
    allButtons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    const correspondingButtons = document.querySelectorAll(`.button-plan[data-tab-button="${tabButton}"]`);
    correspondingButtons.forEach(function(btn) {
        btn.classList.add("active");
    });
}

//////////CARROSSEL//////////////////////////////////////



//////////////////////FAQ//////////////////////////////

const faqs = document.querySelectorAll('.faq-item');

faqs.forEach(faq => {
    faq.addEventListener('click', function() {
        faq.classList.toggle('active');
    })
})


////////////////VIDEOS//////////////////////////////////////////

const videoPlayer = document.getElementById("video-apresentacao");
const videodepoimento1 = document.getElementById("tutorial-video1");
const videodepoimento2 = document.getElementById("tutorial-video2");
const videodepoimento3 = document.getElementById("tutorial-video3");
const videodepoimento4 = document.getElementById("tutorial-video4");
const videodepoimento5 = document.getElementById("tutorial-video5");
const videodepoimento6 = document.getElementById("tutorial-video6");

function playYouTubeVideo(evt) {
    evt.currentTarget.removeEventListener("click", playYouTubeVideo);
    evt.currentTarget.innerHTML = `<iframe src="https://www.youtube.com/embed/${evt.currentTarget.dataset.id}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
}

videoPlayer.addEventListener("click", playYouTubeVideo);
videodepoimento1.addEventListener("click", playYouTubeVideo);
videodepoimento2.addEventListener("click", playYouTubeVideo);
videodepoimento3.addEventListener("click", playYouTubeVideo);
videodepoimento4.addEventListener("click", playYouTubeVideo);
videodepoimento5.addEventListener("click", playYouTubeVideo);
videodepoimento6.addEventListener("click", playYouTubeVideo);

////////////////////////////////////////////////////////////////

const videoPlayer2 = document.getElementById("depoimento-1");
const videoPlayer3 = document.getElementById("depoimento-2");

function playMediaDeliveryVideo(evt) {
    evt.currentTarget.removeEventListener("click", playMediaDeliveryVideo);
    evt.currentTarget.innerHTML = `<iframe src="https://iframe.mediadelivery.net/embed/87164/${evt.currentTarget.dataset.id}?autoplay=1" loading="lazy" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>`;
}

videoPlayer2.addEventListener("click", playMediaDeliveryVideo);
videoPlayer3.addEventListener("click", playMediaDeliveryVideo);


/////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
        const iconeHamburguer = document.getElementById('icone-hamburguer');
        const menu = document.getElementById('menu');

        iconeHamburguer.addEventListener('click', function () {
            menu.classList.toggle('mostrar');
        });
    });






