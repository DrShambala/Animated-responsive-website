var crsr = document.querySelector(".cursor");
var bgcrsr = document.querySelector(".bgCursor");
var arrow = document.querySelector('.down-arrow');
var h4 = document.querySelectorAll("#nav h4 ,.overlay, .overlay2, .footer-box h1");

document.addEventListener("mousemove", function (axis) {
  crsr.style.left = axis.x+30 + "px";
  crsr.style.top = axis.y + "px";
  bgcrsr.style.left = axis.x - 225 + "px";
  bgcrsr.style.top = axis.y - 225 + "px";
});

h4.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 4;
    crsr.style.border = "0.5px solid white";
    crsr.style.backgroundColor = "transparent";
    crsr.style.transitionDuration = '1s';
  });
});
h4.forEach(function (elem) {
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "solid orange";
    crsr.style.backgroundColor = "orange";
  });
});
arrow.addEventListener('mouseenter',function(){
  arrow.style.backgroundColor = 'rgb(255, 255, 79)';
  arrow.style.width = '150px';
  arrow.style.height = '150px';
  arrow.style.color = 'black';
  arrow.style.transitionDuration = '1s';
})
arrow.addEventListener('mouseleave',function(){
  arrow.style.backgroundColor = 'transparent';
  arrow.style.width = '80px';
  arrow.style.height = '80px';
  arrow.style.transitionDuration = '1s';
})
gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "100px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to(".main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    // markers:true,
    start: "top -50%",
    end: "top -100%",
    scrub: 2,
  },
});

gsap.from(".aboutUs img", {
  y: 50,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".aboutUs img",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
  },
});

gsap.to('#img1',{
  x:30,
  y:30,
  duration:0.5,
  scrollTrigger:{
    trigger:'#img1',
    scroller:'body',
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  }
})
gsap.to("#img2", {
  y: -70,
  x: -70,
  duration:0.5,
  scrollTrigger: {
    trigger: "#img2",
    scroller: "body",
    scrub: 4,
  },
});
gsap.from('.bottom-card-container>h1',{
  y:50,
  scrollTrigger:{
    trigger:'.bottom-card-container>h1',
    scoller:'body',
  }
})

function down(){
  console.log('clicked');
  
}