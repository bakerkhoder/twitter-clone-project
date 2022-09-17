const cancel =document.getElementById("cancel")
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

//const btntweetimage=document.querySelector(".image-uploading")
let tweetbutton=document.querySelector("#tweetbutton")
let inputtweettext=document.querySelector("#inputtweettext")
pressed=false
console.log("ji")
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
//fetching data user profile


/*fetch('http://localhost/php-contact/backend/contacts.php')

  .then((response) => response.json())
  .then((data) => {
    username.value=data.username
    email.value=data.email
    date.value=data.date
    image.src=data.image
    following.value=data.following
    followers.value=data.folllowers
  
  })*/


/*const display=()=>{
  if(tweetcontent){

  }
}*/

/*  fetching tweets information and creating a tweet card for each */ 
fetch('http://localhost/php-contact/backend/contacts.php')

  .then((response) => response.json())
  .then((data) => {data.forEach((tweet)=>{
    console.log(tweet)
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
     profimage.src="./images/3.png"
     let usercontent=document.createElement("div")
     tweettop.appendChild(usercontent)
     usercontent.classList.add("user-and-content")
     let usertweet=document.createElement("div")
     usercontent.appendChild(usertweet)
     usertweet.classList.add("user-tweet")
     let username=document.createElement("div")
     usertweet.appendChild(username)
     username.textContent="username"
     //username.textcontent=username
     let email=document.createElement("div")
     usertweet.appendChild(email)
     email.textContent="email"
     //email.textcontent=email
     let tweettext=document.createElement("div")
     usercontent.appendChild(tweettext)
     tweettext.classList.add("tweet-text")
     tweettext.textContent="buhbu"
     //tweettext.textcontent=textcontent
     let tweetimage=document.createElement("div")
     card.appendChild(tweetimage)
     tweetimage.classList.add("tweet-container-image")
     let image=document.createElement("img")
     tweetimage.appendChild(image)
     image.classList.add("tweet-container-image")
     image.src="./images/3.png"
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
 body: new URLSearchParams({ "name": username })})
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
  nbr-=1
  /*    fetch(`http://localhost/php-contact/backend/addcontact.php` , {
 method: 'POST',
 body: new URLSearchParams({ "name": username })})
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
.then((data) => {data.forEach((message)=>{
    console.log(message)
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
 body: new URLSearchParams({ "name": username })})
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
  likee.src="./images/like.png"  
  clicked=false
  nbr-=1
  /*    fetch(`http://localhost/php-contact/backend/addcontact.php` , {
 method: 'POST',
 body: new URLSearchParams({ "name": username })})
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
  console.log(base64[1])
 addcontacts(base64[1])}
 reader.readAsDataURL(file)
 window.location.href="./home.html"
})}  




tweetbutton.addEventListener("click",()=>{
  if(inputtweettext.value){
    fetch(`http://localhost/php-contact/backend/addcontact.php`, {
 method: 'POST',
 body: new URLSearchParams({ "name": inputtweettext.value })})
 .then(response => {response.json()
                    console.log(response)  })
  .then(data => console.log(data)) 
  window.location.href="./home.html"
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
console.log("done")}
fetch('http://localhost/php-contact/backend/contacts.php')

  .then((response) => response.json())
  .then((data) => {
    let suggestions=document.querySelector(".suggestions")
    console.log(data)
    let maybeknow=document.createElement("div")
    suggestions.appendChild(maybeknow)
    maybeknow.classList.add("maybeknow")
   let image=document.createElement("img")
    maybeknow.appendChild(image)
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
    console.log("yup")
  })
   fetchmayknow()

      console.log("test")
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



