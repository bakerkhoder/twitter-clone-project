const cancel =document.querySelector("#cancel")
const popupbtn=document.getElementById("popupbtn")
const popup=document.getElementById("popup")
const darkenmask=document.getElementById("page-mask")
const rightside=document.getElementById("rightside")
const leftside=document.getElementById("leftside")
const searchuser=document.getElementById("searchuser")
const maybeknow=document.querySelector(".maybeknow")
const currentusername=document.getElementById("username")
const email=document.getElementById("email")
const date =document.getElementById("date")
const following=document.getElementById("following")
const followers=document.getElementById("followers")
const image=document.getElementById("emailimage")
const backimage=document.getElementById("imagi")
const popupprof=document.getElementById("popupprof")
const popupprofcard=document.getElementById("popupprofshow")
const canceledit=document.getElementById("cancel-edit")
const updatedname=document.getElementById("updatedname")
const updateddate=document.getElementById("updateddate")
const savebtn=document.getElementById("savebutton")
let tweetbutton=document.querySelector("#tweetbutton")
let inputtweettext=document.querySelector("#inputtweettext")
const logout=document.getElementById("logout")
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const useremail = urlParams.get('userinfo')
console.log(useremail);
var userInfo;
var data = new FormData();
data.append('email', useremail);
fetch(`http://localhost/twitter-clone-project/backend/userinfo.php`,{
         method:'POST',
         body:data})
        .then(response => response.text())
        .then(result => {console.log(JSON.parse(result))
        userInfo=JSON.parse(result)[0]
        //uploading the user infos on the profile
        currentusername.innerHTML=userInfo.first_name
        email.innerHTML=userInfo.email
        date.innerHTML=userInfo.dob
       // image.src=data.image  waiting for the api
       // following.value=data.following    waiting for the api
       // followers.value=data.folllowers    waiting for the api
        console.log(userInfo)
        })
       // logout to remove the user from the local storage
        logout.addEventListener("click",()=>{
          localStorage.removeItem(useremail)
        })
//const updatednamee=updatedname.split(" ")
//const firstname=updatednamee[0]
//const lastname=updatednamee[1]
 /* display the popup for the tweet when clicking on tweet in leftside navbar*/
 popupbtn.addEventListener("click",()=>{

    popup.classList.add("display")
    darkenmask.classList.add("page-mask")
    cancel.addEventListener("click",()=>{
     //   rightside.classList.remove("none")
      // leftside.classList.remove("none")
   // pressed=false
    popup.classList.remove("display")
    console.log("ok")
    darkenmask.classList.remove("page-mask")})
 /*window.addEventListener("resize", function(event) {
   var w=document.body.clientWidth
   pressed=true
    popupbtn.addEventListener("click",()=>{
    if(w<=800 ){
        console.log("hi")
       rightside.classList.add("none")
       leftside.classList.add("none")
    }})}) */})

    popupbtn.addEventListener("click",()=>{
    popup.classList.add("display")
    darkenmask.classList.add("page-mask")
    cancel.addEventListener("click",()=>{
     //   rightside.classList.remove("none")
      // leftside.classList.remove("none")
    popup.classList.remove("display")
    console.log("ok")
    darkenmask.classList.remove("page-mask")})})

    
    popupprof.addEventListener("click",()=>{
    popupprofcard.classList.add("display")
    darkenmask.classList.add("page-mask")
    canceledit.addEventListener("click",()=>{
      console.log("e")
    popupprofcard.classList.remove("display")
    console.log("ok")
    darkenmask.classList.remove("page-mask")})})

/*  fetching tweets information and creating a tweet card for each */ 
fetch('http://localhost/twitter-clone-project/backend/displaytweet.php')

  .then((response) => response.json())
  .then((data) => {data.forEach((tweet)=>{
     let displaytweet = document.querySelector(".display-tweet")
     let card = document.createElement("div")
     card.classList.add("tweet-card")
     displaytweet.appendChild(card)
     let tweettop=document.createElement("div")
     card.appendChild(tweettop)
     tweettop.classList.add("tweet-card-top")
     let profimage=document.createElement("img")
     tweettop.appendChild(profimage)
     profimage.classList.add("profile-image")
     profimage.src="./images/photo.avif"
     let usercontent=document.createElement("div")
     tweettop.appendChild(usercontent)
     usercontent.classList.add("user-and-content")
     let usertweet=document.createElement("div")
     usercontent.appendChild(usertweet)
     usertweet.classList.add("user-tweet")
     let username=document.createElement("div")
     usertweet.appendChild(username)
     username.textContent=tweet.first_name
     //username.textcontent=username
     let email=document.createElement("div")
     usertweet.appendChild(email)
     email.classList.add("email")
     email.textContent=tweet.email
     //email.textcontent=email
     let tweettext=document.createElement("div")
     usercontent.appendChild(tweettext)
     tweettext.classList.add("tweet-text")
     tweettext.textContent=tweet.content
     //tweettext.textcontent=textcontent
     let tweetimage=document.createElement("div")
     card.appendChild(tweetimage)
     tweetimage.classList.add("tweet-container-image")
     let image=document.createElement("img")
     tweetimage.appendChild(image)
     image.classList.add("tweet-container-image")
     image.src="./images/tweetphoto.jpg"
     //image.src=image
     let likebutton=document.createElement("div")
     card.appendChild(likebutton)
     likebutton.classList.add("like-button")
     let nbr=document.createElement("div")
     likebutton.appendChild(nbr)
     nbr.textContent=7
     //nbr.content =likesnbr
     let likee=document.createElement("img")
     likee.classList.add("like")
     likee.src="./images/like.png"
     likebutton.appendChild(likee)

     var clicked =false
     likee.addEventListener("click",()=>{
     if(clicked==false){
    likee.src="./images/liked.png"
    console.log("true")
    clicked=true
 /*    fetch(`http://localhost/php-contact/backend/addcontact.php` , {
 method: 'POST',
 body: new URLSearchParams({ "name": currentusername })})
 .then(response => {response.json()
                    console.log(response)  })
  .then(data => console.log(data))  this is for sending like to datbase*/

   /*    fetch(`http://localhost/php-contact/backend/addcontact.php`)
 .then(response => {response.json()
                    console.log(response)  })
  .then(data => console.log(data))
   nbr.text content=(numer of likes from fetch method)   
  this is for reseting the number of likes*/

  
  }
 else{
  likee.src="./images/like.png"  
  clicked=false
  /*    fetch(`http://localhost/php-contact/backend/addcontact.php` , {
 method: 'POST',
 body: new URLSearchParams({ "name": currentusername })})
 .then(response => {response.json()
                    console.log(response)  })
  .then(data => console.log(data))  this is for sending dislike to datbase*/

   /*    fetch(`http://localhost/php-contact/backend/addcontact.php`)
 .then(response => {response.json()
                    console.log(response)  })
  .then(data => console.log(data))
   nbr.text content=(numer of likes from fetch method)   
  this is for reseting the number of likes*/
  }})

     
})})

/*fetching people you may know and creating their cards*/

const fetchmayknow=()=>{fetch('http://localhost/php-contact/backend/contacts.php')
.then((response) => response.json())
//                             user
.then((data) => {data.forEach((message)=>{
    let suggestions=document.querySelector(".suggestions")
    let maybeknow=document.createElement("div")
    suggestions.appendChild(maybeknow)
    maybeknow.classList.add("maybeknow")
    let image=document.createElement("img")
    maybeknow.appendChild(image)
    image.src="./images/3.png"
    let container=document.createElement("div")
    maybeknow.appendChild(container)
    container.classList.add("usr")
    let username=document.createElement("div")
    container.appendChild(username)
    /*username.textcontent=name */
    username.textContent="username"
    let email=document.createElement("div")
    container.appendChild(email)
    email.classList.add("email")
    email.textContent="email"
    let buttoncntainer=document.createElement("div")
    maybeknow.appendChild(buttoncntainer)
    let followbutton=document.createElement("button")
    buttoncntainer.appendChild(followbutton)
    followbutton.classList.add("btn")
    followbutton.classList.add("btn-blue")
    followbutton.classList.add("black")
    followbutton.textContent="follow"
    var clicked =false
    followbutton.addEventListener("click",()=>{
  if(clicked==false){
    followbutton.textContent="unfollow"
    console.log("true")
    clicked=true
 /*    fetch(`http://localhost/php-contact/backend/addcontact.php` , {
 method: 'POST',
 body: new URLSearchParams({ "name": currentusername })})
 .then(response => {response.json()
                    console.log(response)  })
  .then(data => console.log(data))  this is for sending that i am following this user to datbase*/

   /*    fetch(`http://localhost/php-contact/backend/addcontact.php`)
 .then(response => {response.json()
                    console.log(response)  })
  .then(data => console.log(data))
   nbr.text content=(numer of likes from fetch method)   
  this is for reseting the number of likes*/

  
  }
 else{
  followbutton.textContent="follow"  
  clicked=false
  
  /*    fetch(`http://localhost/php-contact/backend/addcontact.php` , {
 method: 'POST',
 body: new URLSearchParams({ "name": currentusername })})
 .then(response => {response.json()
                    console.log(response)  })
  .then(data => console.log(data))  this is for sending dislike to datbase*/

   /*    fetch(`http://localhost/php-contact/backend/addcontact.php`)
 .then(response => {response.json()
                    console.log(response)  })
  .then(data => console.log(data))
   nbr.text content=(numer of likes from fetch method)   
  this is for reseting the number of likes*/
  }})


     
})})}
fetchmayknow()
/* hee lsoura lback image ba3d lezim n3mil ma3a eshya tenyi lal edi profile
let encodeImageFileAsURL=(element)=>{
let file=element.files[0]
let reader=new FileReader()
reader.onloadend=function(){
function addcontacts(name) {
fetch(`http://localhost/php-contact/backend/addcontact.php`, {
 method: 'POST',
 body: new URLSearchParams({ "name": name })})
 .then(response => {response.json()
                    console.log(response)  })
  .then(data => console.log(data)) }
  let base64= reader.result.split(",")
  console.log(base64)
 addcontacts(base64[1])}
 reader.readAsDataURL(file)
 fetch('http://localhost/php-contact/backend/contacts.php')

  .then((response) => response.json())
  .then((data) => {
    backimage.src=data.backimage

})}
*/

const encodeImageFileAsURLtweet=(element)=>{
  tweetbutton.addEventListener("click",()=>{
let file=element.files[0]
let reader=new FileReader()
reader.onloadend=function(){
function addcontacts(name) {
fetch(`http://localhost/php-contact/backend/addcontact.php`, {
 method: 'POST',
 body: new URLSearchParams({ "name": name,"email":inputtweettext.value })})
 .then(response => {response.json()
                    console.log(response)  })
  .then(data => console.log(data)) }
  let base64= reader.result.split(",")
   addcontacts(base64[1])  
  image=base64[1]
 }
 reader.readAsDataURL(file)
 window.location.href="./profile.html"
})}  




tweetbutton.addEventListener("click",()=>{
  if(inputtweettext.value){
    fetch(`http://localhost/php-contact/backend/addcontact.php`, {
 method: 'POST',
 body: new URLSearchParams({ "name": inputtweettext.value })})
 .then(response => {response.json()
                    console.log(response)  })
  .then(data => console.log(data)) 
  window.location.href="./profile.html"
  }
})



searchuser.addEventListener("keypress",(e)=>{
  if(e.key==="Enter"){
    fetch(`http://localhost/php-contact/backend/addcontact.php`, {
 method: 'POST',
 body: new URLSearchParams({ "name": searchuser.value })})
 .then(response => {response.json()
                    console.log(response)  })
 .then(data => console.log(data))

let suggestions=document.getElementsByClassName("maybeknow")
for(var i=0;i<suggestions.length;i++){
  suggestions[i].style.display="none"
}
fetch('http://localhost/php-contact/backend/contacts.php')

  .then((response) => response.json())
  .then((data) => {
    let suggestions=document.querySelector(".suggestions")
    let maybeknow=document.createElement("div")
    suggestions.appendChild(maybeknow)
    maybeknow.classList.add("maybeknow")
   let image=document.createElement("img")
    maybeknow.appendChild(image)
    //image.src=image
    image.src="./images/hero.png"
    let container=document.createElement("div")
    maybeknow.appendChild(container)
    container.classList.add("usr")
    let username=document.createElement("div")
    container.appendChild(username)
    username.textContent="username"
    let email=document.createElement("div")
    container.appendChild(email)
    email.textContent="email"
    let buttoncntainer=document.createElement("div")
    maybeknow.appendChild(buttoncntainer)
    let followbutton=document.createElement("button")
    buttoncntainer.appendChild(followbutton)
    followbutton.classList.add("btn")
    followbutton.classList.add("btn-blue")
    followbutton.classList.add("black")
    followbutton.textContent="follow"
    
    var clicked =false
    followbutton.addEventListener("click",()=>{
  if(clicked==false){
    followbutton.textContent="unfollow"
    console.log("true")
    clicked=true
 /*    fetch(`http://localhost/php-contact/backend/addcontact.php` , {
 method: 'POST',
 body: new URLSearchParams({ "name": currentusername })})
 .then(response => {response.json()
                    console.log(response)  })
  .then(data => console.log(data))  this is for sending that i am following this user to datbase*/

   /*    fetch(`http://localhost/php-contact/backend/addcontact.php`)
 .then(response => {response.json()
                    console.log(response)  })
  .then(data => console.log(data))
   nbr.text content=(numer of likes from fetch method)   
  this is for reseting the number of likes*/

  
  }
 else{
  followbutton.textContent="follow"  
  clicked=false
  
  /*    fetch(`http://localhost/php-contact/backend/addcontact.php` , {
 method: 'POST',
 body: new URLSearchParams({ "name": currentusername })})
 .then(response => {response.json()
                    console.log(response)  })
  .then(data => console.log(data))  this is for sending dislike to datbase*/

   /*    fetch(`http://localhost/php-contact/backend/addcontact.php`)
 .then(response => {response.json()
                    console.log(response)  })
  .then(data => console.log(data))
   nbr.text content=(numer of likes from fetch method)   
  this is for reseting the number of likes*/
  }})

  
  })
   fetchmayknow()

    
  }
})

/* edit profile */
const encodeinfandimgprof=(element)=>{
 savebtn.addEventListener("click",()=>{
let file=element.files[0]
let reader=new FileReader()
 let updatednamee=updatedname.value.split(" ")
let firstname=updatednamee[0]
let lastname=updatednamee[1]
reader.onloadend=function(){
function addcontacts(name) {
fetch(`http://localhost/php-contact/backend/addcontact.php`, {
  method: 'POST',//          
 body: new URLSearchParams({ "email":firstname,"name":name/*,"date":updateddate.value*/})})
 .then(response => {response.json()
                    console.log(response)  })
  .then(data => console.log(data)) }
  let base64= reader.result.split(",")
   addcontacts(base64[1])  
  console.log('test')
 }
 reader.readAsDataURL(file)

 
 
 window.location.href="./profile.html"
})}  






savebtn.addEventListener("click",()=>{
  if(updatedname){
    console.log("hhhhhh")
    fetch(`http://localhost/php-contact/backend/addcontact.php`, {
 method: 'POST',
 body: new URLSearchParams({ "name": firstname })})
 .then(response => {response.json()
                    console.log(response)  })
  .then(data => console.log(data)) 
  window.location.href="./profile.html"
  }
})

/* adding photo to the tweet  */

 /*function encodeImageFileAsURL(element){
  let file=element.files[0]
  let reader=new FileReader()
  reader.onloadend=function(){
  let addcontacts=(name)=> {
                           fetch(`http://localhost/php-contact/backend/addcontact.php`, {
                                method: 'POST',
                                body: new URLSearchParams({ "name": name }),
                                 }).then(response => {response.json()
                                        console.log(response)  })
                                    .then(data => console.log(data))
                                       }
                            addcontacts(reader.result)}
                            addcontacts(reader.result)
                            reader.readAsDataURL(file)}*/




 //$("#container").children('#name').each(function()
//like event



