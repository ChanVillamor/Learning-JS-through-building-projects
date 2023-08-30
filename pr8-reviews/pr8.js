// local reviews data

const reviews = [
  {
  id: 1,
  name: "Himaya", 
  job: "UI UX Designer",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8urrOGwWHvuDJpnUF9jA43nbgIJim2bXq8A&usqp=CAU",
  text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam reprehenderit distinctio reiciendis, aut maxime ea",
},
{
  id: 2,
  name: "Diwani", 
  job: "UI UX Designer",
  img: "https://i.pinimg.com/236x/a3/ac/1e/a3ac1ed5abaedffd9947face7901e14c.jpg",
  text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam reprehenderit distinctio reiciendis, aut maxime ea",
},
{
  id: 3,
  name: "Alon", 
  job: "UI UX Designer",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2i909Ru_eQtz8rah2m47MPNnWDVCMVhLPUSkaodacFh51v57SINHrDxk6BV9MQNLYdMU&usqp=CAU",
  text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam reprehenderit distinctio reiciendis, aut maxime ea",
},
{
  id: 4,
  name: "Amihan", 
  job: "UI UX Designer",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROIoyOGUdo_cxKAxpDBlRehwkgEMq8AGKNYA&usqp=CAU",
  text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam reprehenderit distinctio reiciendis, aut maxime ea",
}];

// select items 

const img = document.getElementById('person-img');
const  author = document.getElementById('author');
const  job = document.getElementById('job');
const  info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item

let currentItem = 0;

// load initial item

window.addEventListener('DOMContentLoaded', function () {
  showPerson();
});

// show person base on item

function showPerson(){
  const item = reviews[currentItem]; 
  img.src = item.img
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// show prev person

prevBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

randomBtn.addEventListener('click', function (){
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});