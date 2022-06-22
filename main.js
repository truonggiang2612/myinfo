var aboutMe = document.getElementById('about')
var education = document.getElementById('education')
var skills = document.getElementById('skills')
var contact = document.getElementById('contact')
var render = document.getElementById('render')
var hidenAbout = document.getElementsByClassName('info')
var toggleH1 = document.querySelector('.toggle-h1')
var toggleP = document.querySelector('.toggle-p')

//TẠO CHỮ NHẤP NHÁY MÀU (Class toggle-h1 và toggle-p được css màu rồi)
setInterval( () => {
  toggleH1.classList.toggle('toggle-h1')
  toggleP.classList.toggle('toggle-p')
}, 800)


//THAY ĐỔI BACKGROUND và CONTENT KHI CLICK
var buttons = document.querySelectorAll("li");
console.log(buttons); //Kiểm tra xem có trả về 4 thẻ li với prototype là Node list k

//about
buttons[0].onclick = function () {
  if (buttons[0].className == "primary-color") {
    buttons[0].classList.remove("primary-color");
  } else {
    for(var i = 0; i < buttons.length; i++){
        buttons[i].classList.remove("primary-color")
    }
    buttons[0].classList.add("primary-color");
    render.innerHTML =
`   <div class="about_css">
        <p>My name is Tran Truong Giang. I am 28 years old and I am single. I live in Da Nang city</p>
        <p>I like reading books, newspapers, watching videos and playing soccer</p>
        <p>I am a very careful and hardworking person</p>
        <p>I am eager to learn new things and willing to work in a team</p>
        <p>I easily adapt to the new working environment and take initiative in work</p>
    </div>
`
  }
};

//Education
buttons[1].onclick = function () {
  if (buttons[1].className == "primary-color") {
    buttons[1].classList.remove("primary-color");
  } else {
    for(var i = 0; i < buttons.length; i++){
        buttons[i].classList.remove("primary-color")
    }
    buttons[1].classList.add("primary-color");
    render.innerHTML = 
    `  <div class = "education_css">
          <h1>2010 - 2013:</h1>
          <p>DUC TRI COLLEGE DA NANG </br>Majoring in Information Technology</p>
          <h1>2022:</h1>
          <p>F8 TECHNOLOGY EDUCATION
          </br>Learn programming online
          </br>Web Front-end Developer</p>
        </div>
    `
  }
};

//Skills
buttons[2].onclick = function () {
  if (buttons[2].className == "primary-color") {
    buttons[2].classList.remove("primary-color");
  } else {
    for(var i = 0; i < buttons.length; i++){
        buttons[i].classList.remove("primary-color")
    }
    buttons[2].classList.add("primary-color");
    render.innerHTML = 
  `
    <div class="skills_css">
            <h1>Main:</h1>
            <ul> 
                <li>* HTML, CSS, Javascript</li>
                <li>* ReactJs</li>
                <li>* Git</li>
                <li>* Teamwork skill</li>
                <li>* Problem-solving skills</li>
                <li>* Able to work under hight intensity</li>
            </ul>
            <h1>Other: </h1>
            <ul>
                <li>* Photoshop basic</li>
                <li>* Edit video</li>
                <li>* Repair electronics, DIY bluetooth speaker</li>
                <li>* Create video up youtube</li>
            </ul>
        </div>
  `
  }
};

//Contact
buttons[3].onclick = function () {
  if (buttons[3].className == "primary-color") {
    buttons[3].classList.remove("primary-color");
  } else {
    for(var i = 0; i < buttons.length; i++){
        buttons[i].classList.remove("primary-color")
    }
    buttons[3].classList.add("primary-color");
    render.innerHTML = 
    `
    <div class="contact_css">
    <div class="header_contact">
        <h1>Contact Me</h1>
        <p>Get In Touch</p>
    </div>
    <div class="content_contact">
        <div class="left_contact">
            <div class="phone_contact">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <h1>Call Me</h1>
            </div>
            <p>(+84) 814 224 789</p>
            <div class="mail_contact">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <h1>Email</h1>
            </div>
            <p>trantruonggiang2612@gmail.com</p>
            <div class="location_contact">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <h1>Location</h1>
            </div>
            <p>Da Nang, Viet Nam</p>
        </div>
        <div class="form_contact">
            <input type="text" placeholder="Name">
            <input type="text" placeholder="Email">
            <input type="text" placeholder="Subject">
            <input type="text" placeholder="Message">
            <button>Send Message</button>
        </div>
    </div>
  </div>
    `
  }
};



// //SLIDER
var clickImage = document.getElementById('img');
var index = 1;

showSlide = function() {
  var imgs = [
    'images/productcard.png',
    'images/todo-list.png',
    'images/profilecard.png',
    'images/clone-web-electric.png',
    'images/myinfo.png'
  ];
  clickImage.src = imgs[index];
  index ++;
  if (index == imgs.length) {
    index = 0;
  }
};

setInterval(showSlide, 1000)