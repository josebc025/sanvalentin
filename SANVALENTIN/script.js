function startLove() {
    document.querySelector(".hero").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
    document.getElementById("music").play();

    typeWriter();

    // 👇 NUEVOS EFECTOS PARA EL H2
    animateTitle();
    setInterval(createSparkle, 300);
}

/* ==============================
   TEXTO TYPEWRITER
============================== */
const message =
"Desde que llegaste a mi vida, todo es más bonito. Gracias por cada sonrisa, cada abrazo y cada momento juntos. Eres mi hogar, mi paz y mi amor eterno. Te dedico esta canción, pero más que eso, quiero recordarte que deseo dedicar mi vida a ser parte de la tuya. Te amo mi guchee ❤️❤️";

let i = 0;

function typeWriter() {
    if (i < message.length) {
        document.getElementById("typeText").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

/* ==============================
   ANIMACIÓN ESPECIAL H2 ❤️
============================== */
function animateTitle() {
    const title = document.querySelector(".message h2");

    // entrada suave
    title.style.opacity = "0";
    title.style.transform = "translateY(40px) scale(.8)";

    setTimeout(() => {
        title.style.transition = "1.2s ease";
        title.style.opacity = "1";
        title.style.transform = "translateY(0) scale(1)";
    }, 200);

    // latido infinito
    setInterval(() => {
        title.style.transform = "scale(1.07)";
        setTimeout(() => {
            title.style.transform = "scale(1)";
        }, 200);
    }, 1500);
}

/* ==============================
   CHISPITAS ✨ alrededor del h2
============================== */
function createSparkle() {
    const title = document.querySelector(".message h2");
    const rect = title.getBoundingClientRect();

    const sparkle = document.createElement("div");
    sparkle.innerHTML = "✨";
    sparkle.style.position = "fixed";
    sparkle.style.left = rect.left + Math.random() * rect.width + "px";
    sparkle.style.top = rect.top + Math.random() * rect.height + "px";
    sparkle.style.fontSize = "14px";
    sparkle.style.pointerEvents = "none";
    sparkle.style.animation = "sparkleFade 1s forwards";

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1000);
}

/* animación sparkle dinámica */
const style = document.createElement("style");
style.innerHTML = `
@keyframes sparkleFade{
    0%{opacity:1; transform:scale(1);}
    100%{opacity:0; transform:scale(2) translateY(-20px);}
}`;
document.head.appendChild(style);

/* ==============================
   CORAZONES ❤️
============================== */
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 25 + 12) + "px";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 300);

/* ==============================
   PÉTALOS 🌹
============================== */
function createPetal() {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.innerHTML = "🌹";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (Math.random() * 5 + 4) + "s";
    petal.style.fontSize = (Math.random() * 10 + 14) + "px";

    document.getElementById("petals").appendChild(petal);
    setTimeout(() => petal.remove(), 9000);
}

setInterval(createPetal, 250);
