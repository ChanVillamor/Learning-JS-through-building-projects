// classList - show/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggle class

// const navToggle = document.querySelector('.nav-toggle');
// const links = document.querySelector('.links');

// navToggle.addEventListener('click', function(){

  // console.log(links.classList);
  // console.log(links.classList.contains('random'));
  // console.log(links.classList.contains('links'));
  // if(links.classList.contains('show-links')) {
  //   links.classList.remove('show-links');
  // } else {
  //   links.classList.add('show-links');
  // }
//   links.classList.toggle('show-links');
// });

// const navToggle = document.querySelector('.nav-toggle');
// const links = document.querySelector('.links');


// navToggle.addEventListener('click', function() {
//   links.classList.toggle('show-links');
// });

// document.addEventListener('click', function(e) {
//   if(e.target !== navToggle && e.target !== links) {
//     navToggle.classList.remove('show-links');
//     links.classList.remove('show-links');
//   }
// });

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const navContainer = document.querySelector('.nav-container');

navContainer.addEventListener('click', function(e) {
  if (e.target === navToggle || e.target === links) {
    links.classList.toggle('show-links');
  } else {
    navToggle.classList.remove('show-links');
    links.classList.remove('show-links');
  }
});