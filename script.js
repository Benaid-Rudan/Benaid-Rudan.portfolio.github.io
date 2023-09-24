 var typed = new Typed(".multiple-text", {
     strings: ["IT Student", "Future Software Engineer"],
     typeSpeed:100,
     backSpeed:100,
     backDelay:1000,
     loop:true
 })

var typed2 = new Typed(".omeni",{
    strings: ["As a third-year student in the Faculty of Information Technologies, I am passionate about software development, programming and data analysis. I am excited to apply my knowledge and skills to real-world projects, and I am always looking for new opportunities to learn and grow."],
    typeSpeed:50,    
    loop:true
})

var typed3 = new Typed(".skilovi",{
    strings: [" I have experience working in HTML, CSS, JavaScript which enables me to create visually appealing and interactive websites. Also, I'm familiar with C# and Angular and I'm eager to learn new technologies."],
    typeSpeed:50,    
    loop:true
})

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
//  menuIcon.onClick = () => {
//      menuIcon.classList.toggle('bx-menu');
//      navbar.classList.toggle('active');
//  }

document.getElementById('menu-icon').addEventListener('click', function() {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

const navbarItems = document.querySelectorAll('.navbar a');
navbarItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove the 'active' class from the navbar
        navbar.classList.remove('active');
        // Change the menu icon back to its original state (if needed)
        menuIcon.classList.remove('bx-x');
    });
});

