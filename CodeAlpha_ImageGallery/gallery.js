const cards = document.querySelectorAll(".card");
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

let currentIndex = 0;

/* OPEN LIGHTBOX */
cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        currentIndex = index;
        lightboxImg.src = card.querySelector("img").src;
        lightbox.style.display = "flex";
    });
});

/* CLOSE */
document.querySelector(".close").onclick = () => {
    lightbox.style.display = "none";
};

/* NEXT */
document.querySelector(".next").onclick = () => {
    currentIndex = (currentIndex + 1) % cards.length;
    lightboxImg.src = cards[currentIndex].querySelector("img").src;
};

/* PREV */
document.querySelector(".prev").onclick = () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    lightboxImg.src = cards[currentIndex].querySelector("img").src;
};

/* FILTER */
function filterImages(category, btn) {
    document.querySelectorAll(".filters button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    cards.forEach(card => {
        card.style.display =
            category === "all" || card.classList.contains(category)
            ? "block"
            : "none";
    });
}