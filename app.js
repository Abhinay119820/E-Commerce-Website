// let currentIndex = 0
// function showSlide(index){
// const slides = document.querySelector("slide-bar")
// const TotalSlides = document.querySelectorAll('.slide-bar img').length

// if(index >= TotalSlides){
//     currentIndex =0
// }else if(index < 0){
//     currentIndex = TotalSlides-1
// }else {
//     currentIndex = index;
// }

//   slides.style.transform = `translateX(-${currentIndex * 100}%)`;
// }
// function nextSlide(){
//     showSlide(currentIndex + 1)
// }
// function prevSlide(){
//     showSlide(currentIndex - 1)
// }
// setInterval(nextSlide,1500)

 let index = 0;
    const slides = document.getElementById("slide-container");
    const totalSlides = slides.children.length;

    function showSlide() {
      slides.style.transform = `translateX(${-index * 600}px)`;
    }

    function nextSlide() {
      index = (index + 1) % totalSlides;
      showSlide();
    }

    function prevSlide() {
      index = (index - 1 + totalSlides) % totalSlides;
      showSlide();
    }

    // Auto-slide every 3 seconds
    setInterval(nextSlide, 2000);