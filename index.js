let d=document.querySelector(".d")
setInterval(()=>{
let x=Math.floor(Math.random()*200)
let y=Math.floor(Math.random()*650)
let z=Math.floor(Math.random()*365)
let a=Math.floor(Math.random()*304)
let b=Math.floor(Math.random()*300)
let c=Math.floor(Math.random()*365)

d.style=`background-image: linear-gradient(rgb(${x},${y},${z},100),rgb(${a},${b},${c},100));
    transition: all 1s ease;`

},1000)

const btn =document.querySelector(".button")
const content=document.querySelector(".content")

const speechRecogination=window.speechRecogination || window.webkitSpeechRecognition
const recoginiton=new speechRecogination

recoginiton.onstart=function (){
    console.log("voice recording")
}

recoginiton.onresult=function(e){
    const current=e.resultIndex;
    let trans=e.results[current][0].transcript;
    if((trans=="who is bipul") ||( trans=="what is your name " )|| (trans=="Who created you ")||(trans=="bipul")||(trans=="Vipul")) {
       trans="BIPUL, YOUR FATHER MOTHERFUCKER";
       }
       else if((trans=="Bipul kon hai") ||( trans=="tumhara naam kya hai" )|| (trans=="tumko kisne banaya")) {
           trans="BIPUL, tera baap madarchod bhosdikee";
       }
    content.textContent=trans
    console.log(trans)
    read(trans)

}

btn.addEventListener("click",()=>{
    recoginiton.start();
    content.textContent=""
})

function read(message){
 let speech=new SpeechSynthesisUtterance();
 speech.text=message;

 speech.volume=2;
 speech.rate=0.5;
 speech.pitch=1 ;
 window.speechSynthesis.speak(speech)
}