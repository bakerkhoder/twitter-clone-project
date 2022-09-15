addEventListener("load",()=>{
 const popupbtn=document.getElementById("popupbtn")
 const popup=document.getElementById("popup")
 const darkenmask=document.getElementById("page-mask")
 const cancel =document.getElementById("cancel")
 const upperside=document.getElementById("upperside")
 const footer=document.getElementById("footer")
  pressed=false
 popupbtn.addEventListener("click",()=>{
    console.log("ji")  
    popup.classList.add("display")
    darkenmask.classList.add("page-mask")
    cancel.addEventListener("click",()=>{
        upperside.classList.remove("none")
       footer.classList.remove("none")
    pressed=false
    popup.classList.remove("display")
    darkenmask.classList.remove("page-mask")

})
 window.addEventListener("resize", function(event) {
   var w=document.body.clientWidth
   pressed=true
    popupbtn.addEventListener("click",()=>{
    if(w<=800 && pressed==true){
        console.log("hi")
       upperside.classList.add("none")
       footer.classList.add("none")
    }

    
  })   
 }) 
})

  
 
    

})



