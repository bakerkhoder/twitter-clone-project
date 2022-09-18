addEventListener("load",()=>{
 const popupbtn=document.getElementById("popupbtn")
 const popup=document.getElementById("popup")
 const darkenmask=document.getElementById("page-mask")
 const cancel =document.getElementById("cancel")
 const upperside=document.getElementById("upperside")
 const footer=document.getElementById("footer")
 const signin=document.getElementById("signin")
 const signup=document.getElementById("signup")

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
 const email=document.getElementById("email").value
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



textalert.style.backgroundColor=" rgb(64, 170, 147)"
textalert.textContent="information saved"
if(firstname.length<5 ||lastname.length<5 ||!date || password<5){
    textalert.textContent=text
    textalert.style.backgroundColor="red"



  }

 else{
 // window.location.href="./home.html"
  
 }






  
  if(email&&password&&firstname&&lastname&&date){
    function addcontacts(firstname,lastname,email,date,password){
  fetch(`http://localhost/twitter-clone-project/backend/apiregister.php`,{
    method:'POST',
    body:new URLSearchParams({"first_name":firstname,"last_name":lastname,"email":email,"dob":date,"password":password}),
  }).then(response =>{response.json()
  console.log(response)})
  .then(data=>console.log(data))
} //  window.location.href="./home.html"
   addcontacts(firstname,lastname,email,date,password)
   window.location.href="./login.html"
  // fetch('http://localhost/twitter-clone-project/backend/apiregister.php')
  // .then((response) => {response.json()
  //   console.log(response)})
    window.localStorage.setItem(email,password)
  }
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



//sign up when the account already exist 
  signup.addEventListener("click",()=>{
       console.log("e")
         let oldpass=document.getElementById("oldpass").value
         let oldemail=document.getElementById("oldmail").value
       console.log(localStorage.getItem(oldemail))
         
    

         var data = new FormData();
         data.append('email',oldemail);
         data.append('password',oldpass);


// axios.post(`http://localhost/twitter-clone-project/backend/login.php`,data)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

        var userInfo;

        fetch(`http://localhost/twitter-clone-project/backend/login.php`,{
        method:'POST',
         body:data})
        .then(response => response.text())
        .then(result => {console.log(JSON.parse(result))
        userInfo=JSON.parse(result)
        window.location.href="./profile.html?userinfo="+userInfo[0].email

        })
        

       if(localStorage.getItem(oldemail)==oldpass){
       console.log(userInfo)

   }

  })
    

})



