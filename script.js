let nav = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");

let searchBtn = document.querySelector(".search-btn");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

searchBtn.addEventListener("click", () => {
  nav.classList.toggle("search-active");
});




const slider = document.querySelector(".slider");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

function scrollRight() {
    slider.scrollBy({ left: 220, behavior: "smooth" });
}

function scrollLeft() {
    slider.scrollBy({ left: -220, behavior: "smooth" });
}

rightBtn.addEventListener("click", scrollRight);
leftBtn.addEventListener("click", scrollLeft);

// Auto Swipe Function
function autoSwipe() {
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
        scrollRight();
    }
}

let autoSwipeInterval = setInterval(autoSwipe, 3000); // Swipes every 3s

// Pause on Hover
slider.addEventListener("mouseenter", () => clearInterval(autoSwipeInterval));
slider.addEventListener("mouseleave", () => autoSwipeInterval = setInterval(autoSwipe, 3000));




document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    document.getElementById("success-message").style.display = "block";
});


// Pagination Logic
let currentPage = 1;
const totalPages = 3; // Update based on your total pages

// Get pagination elements
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const pageLinks = document.querySelectorAll('.page-number');

// Function to handle page change
function setActivePage(pageNumber) {
  // Remove active class from all page numbers
  pageLinks.forEach((link) => link.classList.remove('active'));
  
  // Add active class to the current page
  const currentPageLink = document.getElementById('page-' + pageNumber);
  currentPageLink.classList.add('active');
  
  // Update current page
  currentPage = pageNumber;
}

// Handle Next button click
nextButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (currentPage < totalPages) {
    setActivePage(currentPage + 1);
  }
});

// Handle Prev button click
prevButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (currentPage > 1) {
    setActivePage(currentPage - 1);
  }
});

// Handle individual page number clicks
pageLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const pageNumber = parseInt(e.target.id.split('-')[1]);
    setActivePage(pageNumber);
  });
});

// Initialize first page as active
setActivePage(currentPage);










