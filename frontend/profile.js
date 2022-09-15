const cancel =document.getElementById("cancel")
const popupbtn=document.getElementById("popupbtn")
const popup=document.getElementById("popup")
const darkenmask=document.getElementById("page-mask")
const rightside=document.getElementById("rightside")
const leftside=document.getElementById("leftside")

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



/*const display=()=>{
  if(tweetcontent){

  }
}*/

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
     let email=document.createElement("div")
     usertweet.appendChild(email)
     email.textContent="email"
     let tweettext=document.createElement("div")
     usercontent.appendChild(tweettext)
     tweettext.classList.add("tweet-text")
     tweettext.textContent="buhbu"
     //console.log("donne") fik tzid hon logo
     let tweetimage=document.createElement("div")
     card.appendChild(tweetimage)
     tweetimage.classList.add("tweet-container-image")
     let image=document.createElement("img")
     tweetimage.appendChild(image)
     image.classList.add("tweet-container-image")
     image.src="./images/3.png"
     let likebutton=document.createElement("div")
     card.appendChild(likebutton)
     likebutton.classList.add("like-button")
     let likee=document.createElement("img")
     likee.classList.add("like")
     likee.src="./images/like.png"
     likebutton.appendChild(likee)
     let nbr=document.createElement("div")
     likebutton.appendChild(nbr)
     nbr.textContent="7"
})})



fetch('http://localhost/php-contact/backend/contacts.php')
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

     
})})