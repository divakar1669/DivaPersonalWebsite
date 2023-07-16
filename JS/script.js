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
        root.style.setProperty('--text-color', 'white');
        root.style.setProperty('--backrgoud-color', 'black');
    }
    else //LIGHT
    {
        image.classList.remove("icon--dark");
        image.classList.add("icon--light");
        image.name="sunny-outline";
        root.style.setProperty('--text-color', 'black');
        root.style.setProperty('--backrgoud-color', 'white');
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



typeWriter();