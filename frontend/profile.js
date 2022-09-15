const cancel =document.getElementById("cancel")
const popupbtn=document.getElementById("popupbtn")
const popup=document.getElementById("popup")
const darkenmask=document.getElementById("page-mask")
const rightside=document.getElementById("rightside")
const leftside=document.getElementById("leftside")
const signin=document.getElementById("signin")
const date=document.getElementById("date")
const email=document.getElementById("email")
const password=document.getElementById("password")

pressed=false
console.log("ji")
 
 popupbtn.addEventListener("click",()=>{

    popup.classList.add("display")
    darkenmask.classList.add("page-mask")
    cancel.addEventListener("click",()=>{
     //   rightside.classList.remove("none")
      // leftside.classList.remove("none")
   // pressed=false
    popup.classList.remove("display")
    console.log("ok")
    darkenmask.classList.remove("page-mask")

})
 /*window.addEventListener("resize", function(event) {
   var w=document.body.clientWidth
   pressed=true
    popupbtn.addEventListener("click",()=>{
    if(w<=800 ){
        console.log("hi")
       rightside.classList.add("none")
       leftside.classList.add("none")
    }
  
    
  })   
 }) */
})
