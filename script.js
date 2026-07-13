// =======================
// PHOTO SLIDER
// =======================

const photos = [
    "photo1.jpg",
    "photo2.jpg"
];

let currentPhoto = 0;

setInterval(() => {
    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    document.getElementById("slide").src = photos[currentPhoto];

}, 3000);


// =======================
// HEARTS
// =======================

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.querySelector(".hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,300);


// =======================
// MESSAGE
// =======================

const text = `Happy Birthday Izaaaaaaa 🎂💗

Mujhe maloom nhi tha yaar wrna mai aur aache se karta.

Par filhal jaldi me ye chhota sa surprise bana raha hu. ❤️

Tum meri bahot achhi dost ho.

Jab hum GC me the tab mai sabke saath rude tha.

Fir bhi tum mujhe samajhti thi.

Isi wajah se tum mujhe sabse alag aur special lagi.

Itni baar koshish karne ke baad aaj hum dost hain. 😭💗

Main promise karta hu ki is dosti ko hamesha nibhane ki puri koshish karunga.

Aur tumhari aankhon me aansu ki ek bund bhi nahi aane dunga.

Bas hamesha aise hi khush rehna aur haste rehna.

Tum haste hue hi sabse zyada achhi lagti ho. ❤️

🎂 Happy Birthday Once Again Izaaaaaaa 💖`;

let index = 0;


// =======================
// START BUTTON
// =======================

function startBirthday(){

document.getElementById("music").play();

document.getElementById("messageBox").style.display="block";

document.getElementById("typing").innerHTML="";

index=0;

typeMessage();

confetti();

}


// =======================
// TYPING EFFECT
// =======================

function typeMessage(){

if(index<text.length){

document.getElementById("typing").innerHTML+=text.charAt(index);

index++;

setTimeout(typeMessage,35);

}

}


// =======================
// CONFETTI
// =======================

function confetti(){

for(let i=0;i<120;i++){

let star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top="-20px";

star.style.fontSize=(15+Math.random()*18)+"px";

star.style.transition="4s linear";

star.style.zIndex="9999";

document.body.appendChild(star);

setTimeout(()=>{

star.style.top="110vh";

star.style.transform="rotate(720deg)";

},50);

setTimeout(()=>{

star.remove();

},4500);

}

}