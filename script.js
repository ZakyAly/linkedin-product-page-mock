let slideIndex = 1;
showSlides(slideIndex);

function moveSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}

document.querySelectorAll("li.tab-link").forEach(function (clickedTab) {
  clickedTab.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelectorAll("li.tab-link").forEach(function (currentTab) {
      currentTab.classList.remove("active-tab");
      clickedTab.classList.add("active-tab");
    });
  });
});
