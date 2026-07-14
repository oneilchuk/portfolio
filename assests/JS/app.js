/*==========================================
    CHUKWUDALU O'NEIL PORTFOLIO
    script.js
==========================================*/

/*==============================
    ELEMENTS
==============================*/

const backTop = document.querySelector(".back-top");

const progress = document.querySelector(".scroll-progress");

const header = document.querySelector(".header");

const counters = document.querySelectorAll("[data-count]");

const hiddenProjects = document.querySelector(".hidden-projects");

const projectButton = document.getElementById("viewProjects");

const menuButton = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

const sections = document.querySelectorAll("section");

const observerElements = document.querySelectorAll(

    ".project, .mini-project, .skill-card, .service-card, .why-card, .testimonial-card, .experience-item, .timeline-item, .stat-card"

);

/*==============================
    SCROLL EVENTS
==============================*/

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progressWidth =
        (scrollTop / pageHeight) * 100;

    progress.style.width = progressWidth + "%";

    if (scrollTop > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

    if (scrollTop > 60) {

        header.style.background =
            "rgba(9,9,9,.92)";

        header.style.boxShadow =
            "0 10px 35px rgba(0,0,0,.45)";

    } else {

        header.style.background =
            "rgba(9,9,9,.72)";

        header.style.boxShadow = "none";

    }

});

/*==============================
    BACK TO TOP
==============================*/

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*==============================
    COUNTER
==============================*/

const counterObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter = entry.target;

const target = +counter.dataset.count;

let value = 0;

const speed = target / 120;

const update = ()=>{

value += speed;

if(value < target){

counter.textContent = Math.floor(value);

requestAnimationFrame(update);

}else{

counter.textContent = target + "+";

}

};

update();

counterObserver.unobserve(counter);

});

},

{

threshold:.5

}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*==============================
    VIEW ALL PROJECTS
==============================*/

if(projectButton){

projectButton.addEventListener("click",()=>{

hiddenProjects.classList.toggle("show-projects");

if(hiddenProjects.classList.contains("show-projects")){

hiddenProjects.style.display="grid";

projectButton.textContent="View Less";

}else{

hiddenProjects.style.display="none";

projectButton.textContent="View All Projects";

}

});

}

/*==============================
    MOBILE MENU
==============================*/

if(menuButton){

menuButton.addEventListener("click",()=>{

navLinks.classList.toggle("open");

});

}

/*==============================
    CLOSE MENU
==============================*/

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("open");

});

});

/*==============================
    ACTIVE NAVIGATION
==============================*/

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

document.querySelectorAll(".nav-links a").forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});

/*==============================
    SCROLL REVEAL
==============================*/

const revealObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

}

);

observerElements.forEach(item=>{

item.classList.add("hidden");

revealObserver.observe(item);

});

/*==============================
    IMAGE PARALLAX
==============================*/

const heroImage=document.querySelector(".image-box");

window.addEventListener("mousemove",(e)=>{

if(!heroImage) return;

const x=(window.innerWidth/2-e.clientX)/45;

const y=(window.innerHeight/2-e.clientY)/45;

heroImage.style.transform=`rotateY(${x}deg) rotateX(${-y}deg)`;

});

/*==============================
    BUTTON RIPPLE
==============================*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px) scale(1.02)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});

/*==============================
    PRELOAD ANIMATION
==============================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

/*==============================
    CONSOLE MESSAGE
==============================*/

console.log(

"%cPortfolio developed by Chukwudalu O'Neil",

"color:#d4af37;font-size:18px;font-weight:bold;"

);