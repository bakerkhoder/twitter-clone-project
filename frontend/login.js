addEventListener("load",()=>{
 const popupbtn=document.getElementById("popupbtn")
 const popup=document.getElementById("popup")
 const darkenmask=document.getElementById("page-mask")
 const cancel =document.getElementById("cancel")
 const upperside=document.getElementById("upperside")
 const footer=document.getElementById("footer")
 const signin=document.getElementById("signin")

 
  pressed=false
 popupbtn.addEventListener("click",()=>{
    popup.classList.add("display")
    darkenmask.classList.add("page-mask")
    cancel.addEventListener("click",()=>{
        upperside.classList.remove("none")
       footer.classList.remove("none")
    pressed=false
    popup.classList.remove("display")
    darkenmask.classList.remove("page-mask")

})


signin.addEventListener("click",()=>{




 const date=document.getElementById("date").value
 const email=document.getElementById("email").value.split("@")
 const password=document.getElementById("password").value
 const firstname=document.getElementById("firstname").value
 const lastname=document.getElementById("lastname").value






const textalert=document.querySelector("#textalert")



if(firstname.length<5){
 text="you should enter minimun of 5 letters"
}
if(lastname.length<5){
 text="you should enter minimun of 5 letters"
}
if(!date){
  text="enter you birthdate please"
}
if(password.length<8){
  text="you have to enter at least for password 8 charcters "
}
if(email[0].length<3 ||email[1].length<5){
  console.log(email)
  console.log(email[1])
  text="invalid email"
}


textalert.style.backgroundColor=" rgb(64, 170, 147)"
textalert.textContent="information saved"
if(firstname.length<5 ||lastname.length<5 || email[0].length<3 ||email[1].length<5 || !date || password<5){
    textalert.textContent=text
    textalert.style.backgroundColor="red"



  }

 else{
  window.location.href="./home.html"
  
 }






  
  /*if(email&&password&&firstname&&lastname&&date){
    function addcontacts(firstname,lastname,email,date,password){
  fetch(`http://localhost/php-contact/backend/addcontact.php`,{
    method:'POST',
    body:new URLSearchParams({"firstname":firstname,"lastname":lastname,"email":email,"date":date,"password":password}),
  }).then(response =>{response.json()
  console.log(response)})
  .then(data=>console.log(data))
}
   addcontacts(firstname,lastname,email,date,password)
  }*/
})


 /*window.addEventListener("resize", function(event) {
   var w=document.body.clientWidth
   pressed=true
    popupbtn.addEventListener("click",()=>{
    if(w<=800 && pressed==true){
        console.log("hi")
       upperside.classList.add("none")
       footer.classList.add("none")
    }

    
  })   
 }) */
})

  
 
    

})



