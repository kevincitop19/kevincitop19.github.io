document.addEventListener('DOMContentLoaded', () => {
  const elementosCarousel = document.querySelectorAll('.carousel');
  M.Carousel.init(elementosCarousel, {
      duration: 150,
      numVisible: 3,
      
  }); 
});

var modal=document.getElementById("myModal");
  var modalImg=document.getElementById("img1");
  var captionTxt=document.getElementById("caption");
  var images = document.querySelectorAll(".images img");
  images.forEach((image) => {
    image.addEventListener("click", () => {
      modal.style.display="block";
      modalImg.src = image.src;
      captionTxt.innerHTML = image.alt;
    });
  });
  var span=document.getElementsByClassName("close")[0];

  span.onclick=function(){

    modal.style.display="none";
  }

  /*img.onclick=function(){
    modal.style.display="block";
    modalImg.src=this.src;
    captionText.innerHTML=this.alt;
  }*/

  