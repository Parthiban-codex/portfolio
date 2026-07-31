/* =====================================================
   PARTHIBAN PORTFOLIO JAVASCRIPT
   Interactive Features
===================================================== */



/* =========================
        PAGE LOADER
========================= */


window.addEventListener("load",()=>{


    const loader=document.getElementById("loader");


    if(loader){

        setTimeout(()=>{

            loader.style.opacity="0";

            setTimeout(()=>{

                loader.style.display="none";

            },500);


        },800);

    }


});






/* =========================
        MOBILE MENU
========================= */


const menuBtn=document.getElementById("menuBtn");

const navLinks=document.getElementById("navLinks");



if(menuBtn){


menuBtn.addEventListener("click",()=>{


    navLinks.classList.toggle("active");


});


}






/* CLOSE MENU AFTER CLICK */


document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks.classList.remove("active");


    });


});







/* =========================
        TYPING EFFECT
========================= */


const typingText=document.getElementById("typing");


const words=[

"Cloud Engineer",

"AWS Enthusiast",

"Data Engineering Learner",

"Python Developer",

"Linux Explorer"

];


let wordIndex=0;

let charIndex=0;

let deleting=false;




function typingAnimation(){


    if(!typingText) return;



    let current=words[wordIndex];



    if(!deleting){


        typingText.textContent=
        current.substring(0,charIndex++);



        if(charIndex>current.length){


            deleting=true;


            setTimeout(typingAnimation,1200);

            return;


        }



    }

    else{


        typingText.textContent=
        current.substring(0,charIndex--);



        if(charIndex===0){


            deleting=false;


            wordIndex++;


            if(wordIndex>=words.length){

                wordIndex=0;

            }


        }


    }



    setTimeout(
        typingAnimation,
        deleting?50:100
    );


}


typingAnimation();







/* =========================
        COUNTER ANIMATION
========================= */


const counters=
document.querySelectorAll(".counter");



counters.forEach(counter=>{


    counter.innerText="0";



    const updateCounter=()=>{


        const target=
        +counter.getAttribute(
        "data-target"
        );


        const current=
        +counter.innerText;



        const increment=
        target/100;



        if(current<target){


            counter.innerText=
            Math.ceil(
            current+increment
            );


            setTimeout(
            updateCounter,
            20
            );


        }

        else{


            counter.innerText=target+"+";


        }


    };


    updateCounter();


});







/* =========================
        DARK LIGHT MODE
========================= */


const themeBtn=
document.getElementById("themeToggle");



if(themeBtn){


themeBtn.addEventListener(
"click",
()=>{


document.body.classList.toggle(
"dark"
);



const icon=
themeBtn.querySelector("i");



if(
document.body.classList.contains("dark")
){


icon.className=
"fa-solid fa-sun";


}

else{


icon.className=
"fa-solid fa-moon";


}



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




/* SAVE THEME */


if(
localStorage.getItem("theme")
==="dark"
){

document.body.classList.add("dark");


}







/* =========================
        CONTACT FORM
========================= */


const contactForm=
document.getElementById("contactForm");



if(contactForm){


contactForm.addEventListener(
"submit",
(e)=>{


e.preventDefault();



const name=
document.getElementById("name").value;


const email=
document.getElementById("email").value;


const purpose=
document.getElementById("purpose").value;


const message=
document.getElementById("message").value;





const formData={

name:name,

email:email,

purpose:purpose,

message:message,

date:
new Date()
.toLocaleString()

};





let messages=
JSON.parse(
localStorage.getItem("messages")
)
||
[];




messages.push(formData);




localStorage.setItem(
"messages",
JSON.stringify(messages)
);





document.getElementById(
"formStatus"
)
.innerHTML=
"✅ Message saved successfully. Thank you!";




contactForm.reset();




setTimeout(()=>{


document.getElementById(
"formStatus"
)
.innerHTML="";


},4000);



});


}







/* =========================
        VISITOR COUNTER
========================= */


let visitors=
localStorage.getItem(
"portfolioVisitors"
);



if(visitors){


visitors++;


}

else{


visitors=1;


}



localStorage.setItem(

"portfolioVisitors",

visitors

);



console.log(
"Visitors:",
visitors
);








/* =========================
        SCROLL REVEAL
========================= */


const revealElements=
document.querySelectorAll(
".glass"
);



const observer=
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}


});


},
{

threshold:.15

}

);




revealElements.forEach(el=>{


el.style.opacity="0";


el.style.transform=
"translateY(40px)";


el.style.transition=
"all .8s ease";


observer.observe(el);



});






/* =========================
        ACTIVE NAV LINK
========================= */


const sections=
document.querySelectorAll(
"section"
);



const navItems=
document.querySelectorAll(
".nav-links a"
);



window.addEventListener(
"scroll",
()=>{


let current="";



sections.forEach(section=>{


const sectionTop=
section.offsetTop-150;



if(
pageYOffset>=sectionTop
){

current=
section.getAttribute("id");

}


});



navItems.forEach(link=>{


link.style.color="";



if(
link.getAttribute("href")
===
"#"+current
){


link.style.color=
"#2563eb";


}



});


});
