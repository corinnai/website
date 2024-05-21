// window.addEventListener('scroll', function() {
//         var scrollAmount = window.scrollY;
//         var svgHeight = window.innerHeight;
//         var path1 = document.getElementById('scroll-path1');
//         var path2 = document.getElementById('scroll-path2');
//         var path3 = document.getElementById('scroll-path3');
//         var path4 = document.getElementById('scroll-path4');
       
//         var totalScrollHeight = document.body.scrollHeight - svgHeight;

//         // Only start drawing after a certain amount of scroll
//         if (scrollAmount > 0) {
//             var amplitude = 20; // Amplitude of the wave
//             var frequency = 0.5; // Frequency of the wave
//             var points = (scrollAmount / totalScrollHeight) * 200; // Dynamically determine the number of points based on scroll
//             var heightPerPoint = scrollAmount / points;
//             var newPath1 = '';
//             var newPath2 = '';
//             var newPath3 = '';
//             var newPath4 = '';

//             for (var i = 0; i <= points; i++) {
//                 var x = amplitude * Math.sin(i * frequency) + 50;
//                 var y = i * heightPerPoint;
//                 newPath1 += (i === 0 ? 'M' : 'L') + `${x},${y} `;

//                 var x2 = amplitude * Math.sin(i * frequency + Math.PI) + 50; // Phase shift for the second path
//                 newPath2 += (i === 0 ? 'M' : 'L') + `${x2},${y} `;
//             }

//             // Update the paths' d attribute to redraw them at the new positions
//             path1.setAttribute('d', newPath1);
//             path2.setAttribute('d', newPath2);
//         } else {
//             // If not scrolled, ensure the paths are empty
//             path1.setAttribute('d', '');
//             path2.setAttribute('d', '');
//         }
//     });


// document.addEventListener('DOMContentLoaded', function() {
//     const path1 = document.getElementById('scroll-path1');
//     const path2 = document.getElementById('scroll-path2');
//     let aboutSection = document.getElementById('.about');
//     let animating = false;

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 animating = true;
//                 requestAnimationFrame(updatePaths);
//             } else {
//                 animating = false;
//             }
//         });
//     }, { threshold: 0.1 }); // Trigger when 10% of the about section is visible

//     observer.observe(aboutSection);

//     function updatePaths() {
//         if (!animating) return;
//         const scrollAmount = window.scrollY + window.innerHeight - aboutSection.offsetTop;
//         const amplitude = 20; // Amplitude of the wave
//         const frequency = 0.05; // Frequency of the wave
//         const points = 200; // Number of points on the path
//         const heightPerPoint = aboutSection.offsetHeight / points;
//         let newPath1 = '';
//         let newPath2 = '';

//         for (let i = 0; i <= points; i++) {
//             const phaseShift = (scrollAmount * 0.005) % (2 * Math.PI); // Ensure phase shift wraps around
//             const x = amplitude * Math.sin(i * frequency + phaseShift) + 100;
//             const y = i * heightPerPoint;
//             newPath1 += (i === 0 ? 'M' : 'L') + `${x},${y} `;
//             const x2 = amplitude * Math.sin(i * frequency + phaseShift + Math.PI) + 100;
//             newPath2 += (i === 0 ? 'M' : 'L') + `${x2},${y} `;
//         }

//         path1.setAttribute('d', newPath1);
//         path2.setAttribute('d', newPath2);
//         requestAnimationFrame(updatePaths);
//         console.log(newPath1, newPath2);
//     }
// });


// let path = document.querySelector('path')
// let pathLength = path.getTotalLength();

// path.style.strokeDasharray = pathLength + ' ' + pathLength;

// path.style.strokeDashoffset = pathLength;

// window.addEventListener('scroll', ()=>{

//     var scrollPencentage =(document.documentElement.scrollTop + document.body.scrollTop)/ (document.documentElement.scrollHeight- document.documentElement.clientHeight);

//     var drawLength = pathLength * scrollPencentage;

//     path.style.strokeDashoffset = pathLength - drawLength;

// });



// document.addEventListener("DOMContentLoaded", function() {
//     const path = document.querySelector('path');
//     const pathLength = path.getTotalLength();  // Corrected method name
  
//     // Setup initial path styles for the hidden state
//     path.style.strokeDasharray = pathLength + ' ' + pathLength;
//     path.style.strokeDashoffset = pathLength;
  
//     // Function to update the path stroke based on scroll position
//     const updatePathStroke = () => {
//       // Calculate how far the "about" section is scrolled into view
//       const section = document.querySelector('.about');
//       const sectionTop = section.getBoundingClientRect().top;
//       const sectionHeight = section.offsetHeight;
//       const scrollPosition = window.scrollY + window.innerHeight - sectionTop; // Position within the section
//       const scrollPercentage = Math.max(0, Math.min(1, scrollPosition / (sectionHeight + window.innerHeight)));
  
//       // Update path stroke
//       const drawLength = pathLength * scrollPercentage;
//       path.style.strokeDashoffset = pathLength - drawLength;
//     };
  
//     // Intersection Observer to manage when to bind/unbind scroll event
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           window.addEventListener('scroll', updatePathStroke);
//           updatePathStroke(); // Initial call to set position correctly if already in view
//         } else {
//           window.removeEventListener('scroll', updatePathStroke);
//         }
//       });
//     }, {
//       threshold: 0.1  // Small threshold to start early
//     });
  
//     // Start observing the 'about' section
//     const aboutSection = document.querySelector('.about');
//     observer.observe(aboutSection);
//   });


// // let path = document.querySelector('path')
// const path = document.getElementById("svgPath");
// let pathLength = path.getTotalLength()

// path.style.strokeDasharray = pathLength + ' ' + pathLength;

// path.style.strokeDashoffset = pathLength;

// window.addEventListener('scroll', ()=>{

// var scrollPencentage =(document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight- document.documentElement.clientHeight);

// var drawLength = pathLength * scrollPencentage;

// path.style.strokeDashoffset = pathLength - drawLength;

// const target = document.querySelectorAll('.scroll');

// var index= 0; length = target.length;

// for(index; index <length; index++){
//     var pos = window.pageYOffset * target[index].dataset.rate;

//     if(target[index].dataset.direction === 'vertical'){
//         target[index].style.transform = 'translate3d(0px, '+pos+'px, 0px)';

//     }else{
//         var posX= window.pageYOffset * target[index].dataset.ratex;
//         var posY = window.pageYOffset * target[index].dataset.ratey;

//         target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
//     }
// }
// });




  // // set height of the svg path as constant
  // const svg = document.getElementById("svgPath");
  // const length = svg.getTotalLength();
  
  // // start positioning of svg drawing
  // svg.style.strokeDasharray = length;
  
  // // hide svg before scrolling starts
  // svg.style.strokeDashoffset = length;
  
  // window.addEventListener("scroll", function () {
  //   const scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  
  //   const draw = length * scrollpercent;
  
  //   // Reverse the drawing when scroll upwards
  //   svg.style.strokeDashoffset = length - draw;
  // });


  // const hamburgerToggle = document.querySelector("#hamburger-button");
  // const navbar = document.querySelector("#navbar");
  // hamburgerToggle.addEventListener("click", onHamburgerClick);

  // function onHamburgerClick(){
  //   if(navbar.classList.contains("open")){
  //     navbar.classList.add("open"); 
  //   }
  //    else
  //    {
  //     navbar.classList.remove("open");
  //    }
  // }

  // document.getElementById('hamburger-checkbox').addEventListener('change', function() {
  //     document.getElementById('menu').classList.toggle('active');
  // });


  const hamburger = document.querySelector("#toggle");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", mobileMenu);

  function mobileMenu() {
       hamburger.classList.toggle("active");
       navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
}