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

// var numberOfTabs = document.getElementsByClassName("main-tabs").length;

// for (i = 0; i < numberOfTabs; i++) {
//   document
//     .getElementsByClassName("tab-link")
//     [i].addEventListener("click", function () {
//       alert("Hey you!");
//     });
// }

// function activeLink() {
//   let i;

//   let numberOfTabs = document.getElementsByClassName("tab-link").length;

//   for (i = 0; i < numberOfTabs; i++) {
//     document.getElementsByClassName("tab-link")[i].classList.add("active-tab");
//   }
// }

// function inactiveLink() {
//   let i;

//   let numberOfTabs = document.getElementsByClassName("tab-link").length;

//   for (i = 0; i < numberOfTabs; i++) {
//     document
//       .getElementsByClassName("tab-link")
//       [i].classList.remove("active-tab");
//   }
// }

// function activeLink() {
//   document.getElementById("home-tab").classList.add("active-tab");
//   document.getElementById("about-tab").classList.add("active-tab");
//   document.getElementById("product-tab").classList.add("active-tab");
//   document.getElementById("posts-tab").classList.add("active-tab");
//   document.getElementById("jobs-tab").classList.add("active-tab");
//   document.getElementById("life-tab").classList.add("active-tab");
//   document.getElementById("people-tab").classList.add("active-tab");
// }

document.querySelectorAll("li.tab-link").forEach(function (clickedTab) {
  clickedTab.addEventListener("click", function (event) {
    // event.preventDefault();
    document.querySelectorAll("li.tab-link").forEach(function (currentTab) {
      currentTab.classList.remove("active-tab");
      clickedTab.classList.add("active-tab");
    });
  });
});
