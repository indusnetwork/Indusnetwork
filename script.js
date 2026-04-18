const words = ["Designer", "Developer", "Programmer"];
let i = 0;        // word index
let j = 0;        // letter index
let currentWord = "";
let isDeleting = false;

function type() {
    currentWord = words[i];

    if (isDeleting) {
        j--;
    } else {
        j++;
    }

    document.getElementById("typing").textContent = currentWord.substring(0, j);

    if (!isDeleting && j === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000); // pause at full word
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();


const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});