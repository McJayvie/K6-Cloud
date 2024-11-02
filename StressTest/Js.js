let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll("#jdm-gallery .image-container img");
    slides.forEach((slide, index) => {
        slide.style.display = "none";
    });
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

window.onscroll = function() { toggleScrollButton(); };

function toggleScrollButton() {
    const scrollBtn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
