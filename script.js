<script>

/* Typing Animation */

const words=[
"Frontend Developer",
"UI Designer",
"JavaScript Developer",
"Creative Coder"
];

let wordIndex=0;
let charIndex=0;
let deleting=false;

const typing=document.getElementById("typing");

function typeEffect(){

let current=words[wordIndex];

if(!deleting){

typing.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(typeEffect,1200);

return;

}

}else{

typing.textContent=current.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

wordIndex++;

if(wordIndex>=words.length)
wordIndex=0;

}

}

setTimeout(typeEffect,deleting?50:120);

}

typeEffect();

/* Contact Form */

document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been sent.");

this.reset();

});

/* Scroll Top */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

};

/* Scroll Reveal */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{
opacity:0,
transform:"translateY(60px)"
},
{
opacity:1,
transform:"translateY(0)"
}

],{

duration:800,
fill:"forwards"

});

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});

/* Skill Animation */

const bars=document.querySelectorAll(".progress");

const skillObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

let target=entry.target.getAttribute("style").match(/\d+/);

entry.target.style.width=target+"%";

}

});

});

bars.forEach(bar=>{

bar.style.width="0";

skillObserver.observe(bar);

});

/* Active Menu */

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(sec=>{

const top=window.scrollY;
const offset=sec.offsetTop-200;
const height=sec.offsetHeight;

if(top>=offset){

current=sec.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

</script>