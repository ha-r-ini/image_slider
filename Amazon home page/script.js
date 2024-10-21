const ims=document.querySelectorAll(".slider ul img");
const prvbtn =document.querySelector(".arrowprv");
const nxtbtn = document.querySelector(".arrownxt");
 let n=0;

 function changeSlide(){
    for(let i=0; i < ims.length; i++){
        ims[i].style.display ='none';
    }
    ims[n].style.display='block';
 }
 changeSlide();
 

 prvbtn.addEventListener('click', (e)=>{
    
    e.preventDefault();
    if(n>0){
        n--;
    }
    else{
        n= ims.length -1;
        }
changeSlide();
 })

 nxtbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(n < ims.length - 1){
        n++;
    }
    else{
        n=0;
    }
    changeSlide();
 })
 const scroll =document.querySelector(".products");
 for(const item of scrool){
    item.addEventListener('wheel' ,(e)=>{
        e.preventDefault();
        item.scrollLeft +=e.deltaY;
    })
 }