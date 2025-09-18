
//  let index = 0;
//     const slides = document.getElementById("slide-container");
//     const totalSlides = slides.children.length;

//     function showSlide() {
//       slides.style.transform = `translateX(${-index * 600}px)`;
//     }

//     function nextSlide() {
//       index = (index + 1) % totalSlides;
//       showSlide();
//     }

//     function prevSlide() {
//       index = (index - 1 + totalSlides) % totalSlides;
//       showSlide();
//     }

//     // Auto-slide every 3 seconds
//     setInterval(nextSlide, 2000);