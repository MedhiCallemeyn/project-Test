// ************* HEADER **************************
// Nav
// Connaitre niveau de scroll (window.scrollY)
let pastScroll= 0;
let currentScroll ;
// selecteur de la nav .
const nav = document.querySelector('nav');
//ajout de l'event au scroll
window.addEventListener("scroll",()=>{
currentScroll = window.scrollY;
if(currentScroll>pastScroll){
  nav.style.top = 0 + "px";
}else{
  nav.style.top = -100 + "px";
}
pastScroll  = currentScroll;
}
)
//#title
window.addEventListener("load",()=>{
  setTimeout(()=>{
    title.style.transform = "translateY(40vh)";
    title.style.filter = "blur(0)";
  },500)
  setTimeout(()=>{
    title.style.border = "solid 5px whitesmoke"
},4000);
})
// *************** MAIN **************************
window.addEventListener("scroll",()=>{
// stockage de l'operation pour avoir la valeur(entre 0 et 1 ) de scroll quelque soit l'ecran
let scrollValue = (window.scrollY + window.innerHeight)/ document.body.offsetHeight; 
//faire apparaitre la premiere section 
    if(scrollValue  >= 0.45){
      mySelf.style.filter = "blur(0)";
    }
        // Faire apparaitre les 2 parties selon le scroll (2eme section)
    if(scrollValue  >= 0.70){
      first.style.opacity = 1;
      first.style.transform ="translateX(0px)";
      firstBis.style.opacity = 1;
    }else{
      first.style.opacity = 0;
      first.style.transform ="translateX(-200px)";
      firstBis.style.opacity = 0;

    }if(scrollValue  >= 0.80){
      second.style.opacity = 1;
      second.style.transform ="translateX(0px)";
      secondBis.style.opacity = 1;
    }else{
      second.style.opacity = 0;
      second.style.transform ="translateX(-200px)";
      secondBis.style.opacity = 0;

    }
    
    if(scrollValue >=0.88){
      third.style.opacity = 1;
      third.style.transform ="translateX(0px)";
      thirdBis.style.opacity = 1;
    }else{
      third.style.opacity = 0;
      third.style.transform ="translateX(-200px)";
      thirdBis.style.opacity = 0;

    }

    if(scrollValue >=0.96){
      four.style.opacity = 1;
      four.style.transform ="translateX(0px)";
      fourBis.style.opacity = 1;
    }else{
      four.style.opacity = 0;
      four.style.transform ="translateX(-200px)";
      fourBis.style.opacity = 0;
    }
  })
// faire apparaitre et disparaitre le POP UP (competences) 
let popup = document.getElementById("popup");
let blur = document.querySelector(".blur");

function openPopup(){
popup.classList.add("open-popup");
blur.style.filter = "blur(2rem)";
}
function closePopup(){
  popup.classList.remove("open-popup");
  blur.style.filter = "blur(0)";
}


//****************FOOTER************************** 
const target = document.getElementById('target');
let array = ["les echecs","dicta.","ab at!","eveniet voluptate ipsam accusamus?","quod minus amet esse"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = ()=>{
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[wordIndex][letterIndex];
  setTimeout(()=>{
    letter.remove();
  },2800)
}

const loop = ()=>{
setTimeout(()=>{
  if(wordIndex>=array.length){
    wordIndex = 0;
    letterIndex = 0;
    loop();
  }else if(letterIndex<array[wordIndex].length){
createLetter();
letterIndex++;
loop();
  }else{
    wordIndex++;
    letterIndex=0;
    setTimeout(()=>{
      loop();
    },2800);
  }  
},50)
}
loop()
//************************************************ */