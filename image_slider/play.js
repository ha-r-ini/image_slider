const btn =document.querySelectorAll("a");
const list=["design","design3","leafs","flowers"];
const holder=document.querySelector(".holder");
  
let index=0;
btn.forEach((button) => {
    button.addEventListener('click',()=>{
        if(button.classList.contains("prv")){
        index--;
        if(index<0){
            index=list.length-1;
        
        }
        holder.style.background=`url("/pic/${list[index]}.jpeg") center/cover no-repeat`;
    
            
        }
        else{
            index++;
            if (index >= list.length) {
                index = 0;
        }
        holder.style.background = `url("/pic/${list[index]}.jpeg") center/cover no-repeat`;
    }
  

})
})
    
