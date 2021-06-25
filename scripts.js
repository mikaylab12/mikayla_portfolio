// button functionality
function toggleSideNavbar() {
  document
    .getElementsByClassName("sideNavbar-links")[0]
    .classList.toggle("active");
}



let projects = [
  {
    imgURL: "./images/WhatsApp Image 2021-04-30 at 15.00.27.jpeg",
    imgALT: "Contact Form Preview",
    title: "CONTACT FORM",
    techStack: "HTML/CSS",
    description: "Below are the Live and Coding links to this project:",
    githubURL: "https://github.com/mikaylab12/contact-form.git",
    liveProjectURL: "https://lucid-johnson-fc94ee.netlify.app/"
  },
  {
    imgURL: "./images/conditionals.png",
    imgALT: "Conditionals Task Preview",
    title: "CONDITIONALS TASK",
    techStack: "PYTHON3",
    description: "Below are the Live and Coding links to this project:",
    githubURL: "https://github.com/mikaylab12/python-conditional-task.git",
    liveProjectURL: "https://replit.com/@mikaylab12/python-conditionals-task#main.py"
  },
  {
    imgURL: "https://picsum.photos/300?random=3",
    imgALT: "Testimonial Slider Preview",
    title: "TESTIMONIAL SLIDER",
    techStack: "HTML/CSS",
    description: "Below are the Live and Coding links to this project:",
    githubURL: "https://github.com/mikaylab12/slider.git",
    liveProjectURL: "https://priceless-leakey-e01dda.netlify.app/"
  },
  {
    imgURL: "./images/Screenshot from 2021-06-01 14-56-55.png",
    imgALT: "BMI Calculator Preview",
    title: "BMI CALCULATOR",
    techStack: "PYTHON3",
    description: "Below are the Live and Coding links to this project:",
    githubURL: "https://github.com/mikaylab12/BMI-calculator.git",
    liveProjectURL: "https://replit.com/@mikaylab12/BMI-Calculator#main.py"
  },
  {
    imgURL: "./images/Screenshot from 2021-06-01 14-56-55.png",
    imgALT: "MY TIMELINE Preview",
    title: "MY TIMELINE",
    techStack: "HTML/CSS",
    description: "Below are the Live and Coding links to this project:",
    githubURL: "https://github.com/mikaylab12/timeline.git",
    liveProjectURL: "https://heuristic-allen-9659fd.netlify.app/"
  },
  {
    imgURL: "./images/python2.png",
    imgALT: "Fibonacci Task Preview",
    title: "FIBONACCI TASK",
    techStack: "PYTHON3",
    description: "Below are the Live and Coding links to this project:",
    githubURL: "https://github.com/mikaylab12/fibonacci_task.git",
    liveProjectURL: "https://replit.com/@mikaylab12/fibonaccitask#main.py"
  },
  {
    imgURL: "./images/sneaker-site.png",
    imgALT: "Sneaker Site Preview",
    title: "SNEAKER SITE",
    techStack: "PYTHON3",
    description: "Below are the Live and Coding links to this project:",
    githubURL: "https://github.com/mikaylab12/Sneaker-Store.git",
    liveProjectURL: "https://stoic-babbage-6d0cd1.netlify.app/"
  },
  {
    imgURL: "./images/adding-numbers.png",
    imgALT: "Adding Numbers Preview",
    title: "ADDING NUMBERS",
    techStack: "PYTHON3",
    description: "Below are the Live and Coding links to this project:",
    githubURL: "https://github.com/mikaylab12/tkinter_adding_numbers.git",
    liveProjectURL: "https://replit.com/@mikaylab12/tkinteraddingnumbers#main.py"
  },
  {
    imgURL: "https://picsum.photos/300?random=5",
    imgALT: "My Project 8",
    title: "My Project Title 5",
    techStack: "Python",
    description: "Below are the Live and Coding links to this project:",
    githubURL: "#",
    liveProjectURL: "#"
  }
];

function createCard(card) {
  let createdCard = ` <div class="portfolioPage-cards" data-aos="fade-down" techStack=${card.techStack} >
      <img src="${card.imgURL}" alt="${card.imgALT}">
      <div> 
      <h3>${card.title}</h3>
      <h4>${card.techStack}</h4>
      <p>${card.description}</p>
      </div>
      <div class="portfolioPage-links">
        <a href="${card.githubURL}" target="_blank">GitHub</a>
        <a href="${card.liveProjectURL}" target="_blank">Live</a>        
      </div>
    </div>`;
  return createdCard;
}

function renderCards() {
  let projectContainer = document.querySelector(".project-container");
  for (project of projects) {
    let card = createCard(project);
    projectContainer.innerHTML += card;
  }
}

renderCards();

function filterCards(category) {
  let cards = document.getElementsByClassName("project-card");
  if (category == "All") {
    for (card of cards) {
      card.style.display = "block";
    }
    return;
  }
  for (card of cards) {
    console.log(card);
    card.style.display = "none";
  }
  
  let selectedCards = document.querySelectorAll(`[techStack='${category}']`);

  for (card of selectedCards) {
    card.style.display = "block";
  }
}
