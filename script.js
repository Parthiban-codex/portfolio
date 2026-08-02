/*====================================================
    PARTHIBAN PORTFOLIO JAVASCRIPT
====================================================*/


//================ MOBILE NAVBAR =================//

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");


        if(navLinks.classList.contains("active")){

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        }

        else{

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }


    });

}



// Close menu after clicking link

document.querySelectorAll(".nav-links a").forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks.classList.remove("active");


        if(menuBtn){

            const icon = menuBtn.querySelector("i");


            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }


    });


});





//================ SCROLL REVEAL =================//


const revealElements = document.querySelectorAll(

".skill-card, .project-card, .service-card, .contact-card, .contact-form"

);



const revealOnScroll = ()=>{


    revealElements.forEach(element=>{


        const position = element.getBoundingClientRect().top;


        const windowHeight = window.innerHeight;



        if(position < windowHeight - 80){


            element.classList.add("fade-up");


            setTimeout(()=>{

                element.classList.add("active");

            },100);


        }



    });



};



window.addEventListener(

"scroll",

revealOnScroll

);


revealOnScroll();




//================ BACK TO TOP =================//


const topBtn = document.getElementById("topBtn");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        topBtn.classList.add("show");


    }

    else{


        topBtn.classList.remove("show");


    }


});




if(topBtn){


    topBtn.addEventListener("click",()=>{


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });


}





//================ ACTIVE NAV LINK =================//


const sections = document.querySelectorAll("section");


const navItems = document.querySelectorAll(".nav-links a");



window.addEventListener("scroll",()=>{


    let current = "";


    sections.forEach(section=>{


        const sectionTop = section.offsetTop - 150;


        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }


    });



    navItems.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href") === "#"+current){


            link.classList.add("active");


        }


    });



});





//================ SERVICE REQUEST FORM =================//


const serviceForm = document.getElementById("serviceForm");



if(serviceForm){


serviceForm.addEventListener("submit",(event)=>{


    event.preventDefault();



    const button = serviceForm.querySelector("button");



    button.innerHTML = 
    '<i class="fa-solid fa-check"></i> Request Sent';



    button.style.background="#16a34a";



    setTimeout(()=>{


        button.innerHTML =

        '<i class="fa-solid fa-paper-plane"></i> Send Request';


        button.style.background="";

        serviceForm.reset();



    },3000);



});


}





//================ BUTTON PRESS EFFECT =================//


document.querySelectorAll(

"button, a"

).forEach(item=>{


    item.addEventListener("mousedown",()=>{


        item.style.transform="scale(.96)";


    });



    item.addEventListener("mouseup",()=>{


        item.style.transform="";


    });



});





//================ CURRENT YEAR FOOTER =================//


const year = new Date().getFullYear();


const copyright = document.querySelector(".copyright");



if(copyright){


    copyright.innerHTML =

    `© ${year} Parthiban. All Rights Reserved.`;


}