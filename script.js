/* =====================================================
   PARTHIBAN PORTFOLIO SCRIPT
===================================================== */


/* =========================
      TYPING ANIMATION
========================= */


const words = [

    "Cloud Engineer",

    "AWS Enthusiast",

    "Data Engineering Learner",

    "Python Developer",

    "Linux Explorer"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;



const typing = document.getElementById("typing");



function typeEffect(){


    if(!typing) return;



    const current = words[wordIndex];



    if(!deleting){


        typing.textContent =
        current.substring(0,charIndex++);



        if(charIndex > current.length){


            deleting = true;


            setTimeout(typeEffect,1200);


            return;


        }



    }
    else{


        typing.textContent =
        current.substring(0,charIndex--);



        if(charIndex < 0){


            deleting = false;


            wordIndex++;



            if(wordIndex >= words.length){

                wordIndex = 0;

            }


        }


    }



    setTimeout(

        typeEffect,

        deleting ? 50 : 120

    );


}



typeEffect();








/* =========================
        MOBILE MENU
========================= */


const menuBtn =
document.getElementById("menuBtn");


const navLinks =
document.getElementById("navLinks");



if(menuBtn){


menuBtn.addEventListener(
"click",
()=>{


navLinks.classList.toggle(
"active"
);


});


}








/* =========================
        THEME TOGGLE
========================= */


const themeBtn =
document.getElementById("themeToggle");



if(themeBtn){


themeBtn.addEventListener(
"click",
()=>{


document.body.classList.toggle(
"dark"
);



localStorage.setItem(

"theme",

document.body.classList.contains("dark")
?
"dark"
:
"light"

);


});


}




if(
localStorage.getItem("theme")
==="dark"
){


document.body.classList.add("dark");


}








/* =========================
        CONTACT FORM
========================= */


const contactForm =
document.getElementById("contactForm");



if(contactForm){


contactForm.addEventListener(

"submit",

function(e){


e.preventDefault();



const status =
document.getElementById(
"formStatus"
);



if(status){


status.innerHTML =
"✅ Message sent successfully!";


}



this.reset();



setTimeout(()=>{


if(status){

status.innerHTML="";

}


},3000);



}

);


}








/* =========================
        SCROLL TOP BUTTON
========================= */


const topBtn =
document.getElementById("topBtn");



if(topBtn){


window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 400){


topBtn.style.display="block";


}

else{


topBtn.style.display="none";


}


});


topBtn.onclick=()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


};


}








/* =========================
        SCROLL REVEAL
========================= */


const observer =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"show"
);


}


});


},

{

threshold:.15

}

);




document
.querySelectorAll(
"section,.glass"
)
.forEach(element=>{


observer.observe(element);


});








/* =========================
        SKILL BAR ANIMATION
========================= */


const bars =
document.querySelectorAll(
".skill-bar span"
);



const skillObserver =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


const width =
entry.target.style.width;



entry.target.style.width="0";



setTimeout(()=>{


entry.target.style.width=width;


},200);



}


});


}

);





bars.forEach(bar=>{


skillObserver.observe(bar);


});








/* =========================
        ACTIVE NAVIGATION
========================= */


const sections =
document.querySelectorAll(
"section"
);



const links =
document.querySelectorAll(
".nav-links a"
);



window.addEventListener(
"scroll",
()=>{


let current="";



sections.forEach(section=>{


const sectionTop =
section.offsetTop - 150;



if(
window.scrollY >= sectionTop
){


current =
section.getAttribute("id");


}


});




links.forEach(link=>{


link.classList.remove(
"active"
);



if(
link.getAttribute("href")
===
"#"+current
){


link.classList.add(
"active"
);


}



});


});