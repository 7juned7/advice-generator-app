const URL = "https://api.adviceslip.com/advice";
async function getPost(){
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

const advice = document.querySelector(".advice");
const chanegAdvice = document.querySelector(".logo");
const adviceId = document.querySelector(".advice-id");
const adviceSection = document.querySelector(".advice-section");
 chanegAdvice.addEventListener("click",()=>{
    getPost()
    .then(myData =>{
      show(myData);
      });
 
      
     
 })

 function show(data){
 
    console.log(data);

 
     adviceSection.innerHTML = `
     <p> ADVICE  <span class="advice-id" >  #${data.slip.id}</span></p>
     <h1  class="advice">"${data.slip.advice}"</h1>
     `
       }


   
  

