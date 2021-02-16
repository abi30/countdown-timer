

const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minsEl=document.getElementById('mins');
const secondsEl=document.getElementById('seconds');





const birthday="17 Feb 2021";

function countdown(){


const new_date= new Date(birthday);
const current_date= new Date();

const total_seconds = (new_date-current_date) / 1000;

const days = Math.floor(total_seconds / 3600 / 24);
const hours = Math.floor(total_seconds/3600) % 24;
const mins = Math.floor(total_seconds/60) % 60;
const seconds= Math.floor(total_seconds)%60;

 daysEl.innerHTML=formatTime(days);
 hoursEl.innerHTML=formatTime(hours);
 minsEl.innerHTML=formatTime(mins);
 secondsEl.innerHTML=formatTime(seconds);

//  console.log(days,hours,minutes,seconds);

}
function formatTime(time){

    return time < 10 ? `0${time}` : time;
}

// initial call

countdown();
setInterval(countdown,1000);

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add('heart');

    heart.style.left=Math.random()*100 +"vw";
    heart.style.animationDuration=Math.random()*2+3+"s"+"v";

    heart.innerText= '❤️';
   

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },70000);
   
    
}
setInterval(createHeart,300);

