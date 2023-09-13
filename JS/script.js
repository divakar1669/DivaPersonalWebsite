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
  window.open("https://amplify-amplify2d9c0a79cab14-staging-151042-deployment.s3.us-east-2.amazonaws.com/DivaResume/Divakar_Resume.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCmFwLXNvdXRoLTEiSDBGAiEA7Kfag1VYe4XIwvxcxa69LhfoFb%2BhkLav3rbSnKxGwOwCIQCcOzL%2BScfJ0XQqF7plmBXxsgwiP%2BLEookMKhbh%2FYpPNyrkAggiEAIaDDQ0OTEzMzMzMjk5OCIMR8CVDxecHf8Z95%2FXKsECMzeYJ774egQUhp1ZWi%2FDwDTdjoTQ7tYfssw%2B4xXiyWiNqP8AU3HkTXUckbpCHhiI4FX0RhJMZj0z7VfZTiqEMnWzc%2B%2Br1PUJDl1y0Gyiv7rmbHvFwlGkAxCz3jMnXAf%2FaRQSNCjT0AWnsQ5H8Ab2Ce9wJgJXXxF9inpDrIIxdJEeFH21DvT%2BdhGCFL2l%2BqLKK5Eio6vl25VUd4ijHtk%2BvlEI7QrUXApRvfnxb4A%2FVsl7J50aIakEayTfwx3frS615l65TJ53Dea4GiIMAIwpXGdwPV%2FosnrepUghnPJ%2Ba0LpUQblu1ZMBPPJJBhnhI2dFu5yVG3AL4BjYSyIKc%2BnnxXbHk5%2FcnepWUHpnzhxiFNNGfTaEIassU10kgbgIfSVcBA73TXiFE%2FsP0E8DkTtGXPcueJHtfjyMGtXihuzZJGGMI%2BHhKgGOrICEvYHWhUbfHJ%2Bt2cTZdY90lKBQk3%2B%2FUDGKOH%2Bc7VV8fa2XJ6AsVGvQVLH%2BbPEodVgzXTF%2FgwO56r4nxhJX3zakOMdEgGgKYJNlBORV0yLP4M93nazqQMcCnNRH5S%2Blz68DmUVR4V%2Fv58pgjxruluZ46tpf%2BaDQscBlOe2uS9XmAm7p5Nva7LBIZq74N8uFCfr7PLzZrjcZ4Jn%2BEDT7Y%2F8WF9uCUedKWXjxLYYG10wzZEwuLHRp7jcIMc26hzfzC7Qh8clYtPV%2F5JX838FGPCPP2nlAhAjSAbkNVunL7icBDcgjw%2Flpt%2FOMCLtiOzmftGzafj5EhQhx9xpg9iHEmMZE3CzQoYB5kXKvU8jkvzuH59jnh5jqpP%2F1gEEqr38rNWb%2BXGxNNgdD3kEmpr%2FckRCtCun&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230913T003546Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWRETOZIDLM7NKQFA%2F20230913%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=2c00e8b23633af4252d7a1894a1d1d28a79d7e7b328deda6fd7630aee5a248ca", "_blank");

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
