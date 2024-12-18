var i = 0;
var txt = ` Hey, I am Divakar Thiyagarajen, an inquisitive tech enthusiast, constantly seeking to expand my
knowledge and grasp new technologies. I strive to maintain a foundational understanding of how
things operate. This webpage aims to provide a brief overview of my educational and professional
journey thus far, offering a glimpse into my experiences.`;
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("aboutDiva").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function darkMode()
{
    var checkBox = document.getElementById("toggle");
    const root = document.querySelector(':root');
    const image = document.getElementById("moon_Or_Sun");
    if(checkBox.checked === false) // DARK
    {
        image.classList.remove("icon--light");
        image.classList.add("icon--dark");
        image.name="moon-outline";
        root.style.setProperty('--text-color', '#fffffc');
        root.style.setProperty('--backrgoud-color', '#03071e');
    }
    else //LIGHT
    {
        image.classList.remove("icon--dark");
        image.classList.add("icon--light");
        image.name="sunny-outline";
        root.style.setProperty('--text-color', '#003049');
        root.style.setProperty('--backrgoud-color', '#f1f7ed');
    }

}

function scrollToElement(elementId) {
    var headerHeight = document.querySelector('.fixed-header').offsetHeight;
  var element = document.getElementById(elementId);
  var offsetTop = element.offsetTop - headerHeight;

  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth'
  });
}

  const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach(item => {
  item.addEventListener('click', () => {
    const details = item.querySelector('.timeline-details');
    const logo = item.querySelector('.timeline-logo');

    details.classList.toggle('expanded');
    logo.classList.toggle('expanded');

    if (details.classList.contains('expanded')) {
      logo.style.animation = 'logo-scale 0.3s ease';
      details.style.animation = 'slide-in 0.3s ease';
    } else {
      logo.style.animation = 'logo-scale 0.3s ease reverse';
      details.style.animation = 'slide-out 0.3s ease';
    }
  });
});

function redirectToResume()
{
  window.open("https://resume-development.zohostratus.com/Diva%20Resume.pdf", "_blank");

}

function diva()
{
  var x =10;
  var y = sendRequestToAdvIO();
}


function sendRequestToAdvIO()
{
const url = 'https://divaprofessionalwebsite-791849473.development.catalystserverless.com/server/diva_professional_website_function/';

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status >= 200 && xhr.status < 300) {
      const responseData = JSON.parse(xhr.responseText);
      console.log(responseData); 
    } else {
      console.error('Error fetching data:', xhr.status, xhr.statusText);
    }
  }
};
xhr.open('GET', url, true);
xhr.onerror = function () {
  console.error('Network error occurred');
};
xhr.send();
 }
diva();
typeWriter();
