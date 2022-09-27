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
var user = JSON.parse(localStorage.getItem(useremail));


//fetching user profile info

//console.log(useremail);
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
     //   console.log(userInfo.profimage)
     if(userInfo.prof_image){
       image.src="./"+userInfo.prof_image
     }
       else{ image.src="./images/prof.png"}
        updateddate.value=userInfo.dob
        updatedname.value=userInfo.first_name
       // image.src=data.image  waiting for the api
       // following.value=data.following    waiting for the api
       // followers.value=data.folllowers    waiting for the api
       // console.log(userInfo)
        })
       // logout to remove the user from the local storage
        logout.addEventListener("click",()=>{
          localStorage.removeItem(useremail)
        })

 popupbtn.addEventListener("click",()=>{

    popup.classList.add("display")
    darkenmask.classList.add("page-mask")
    cancel.addEventListener("click",()=>{

    popup.classList.remove("display")

    darkenmask.classList.remove("page-mask")})

  })

    popupbtn.addEventListener("click",()=>{
    popup.classList.add("display")
    darkenmask.classList.add("page-mask")
    cancel.addEventListener("click",()=>{
  
    popup.classList.remove("display")
  
    darkenmask.classList.remove("page-mask")})})

    
    popupprof.addEventListener("click",()=>{
    popupprofcard.classList.add("display")
    darkenmask.classList.add("page-mask")
    canceledit.addEventListener("click",()=>{
  
    popupprofcard.classList.remove("display")

    darkenmask.classList.remove("page-mask")})})

/*  fetching tweets information and creating a tweet card for each */ 


  function createTweet(
  tweet_id,
  tweet,
  
  tweet_picture,
  //tweet_created_at,
  name,
  
  profile_image_path,
  user_id,
  likes
) {
  // feed container
//  let feed_container = document.getElementById('feed-container')

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
   

     let usercontent=document.createElement("div")
     tweettop.appendChild(usercontent)
     usercontent.classList.add("user-and-content")

     let usertweet=document.createElement("div")
     usercontent.appendChild(usertweet)
     usertweet.classList.add("user-tweet")

     let username=document.createElement("div")
     usertweet.appendChild(username)
    

     //username.textcontent=username
     let email=document.createElement("div")
     usertweet.appendChild(email)
     email.classList.add("email")
 
     //email.textcontent=email
     let tweettext=document.createElement("div")
     usercontent.appendChild(tweettext)
     tweettext.classList.add("tweet-text")
  
     //tweettext.textcontent=textcontent
     let tweetimage=document.createElement("div")
     card.appendChild(tweetimage)
     tweetimage.classList.add("tweet-container-image")

     let image=document.createElement("img")
     tweetimage.appendChild(image)
     image.classList.add("tweet-container-image")
   
     //image.src=image
     let likebutton=document.createElement("div")
     card.appendChild(likebutton)
     likebutton.classList.add("like-button")

     let nbr=document.createElement("div")
     likebutton.appendChild(nbr)
     
     //nbr.content =likesnbr
     let likee=document.createElement("img")
     likee.classList.add("like")
     likebutton.appendChild(likee)


  // INSERT DATA
  //for profile image
  if (profile_image_path) {
   profimage.src = `./${profile_image_path}`
  } else {
      profimage.src = './images/prof.png' 
  }
  //for username and email
  username.textContent=name
  email.textContent= `@${name}`

 //for tweet image
   image.src=`./${tweet_picture}`
  //for tweettext
  tweettext.textContent=tweet
 //for the like icon
 likee.src="./images/like.png"

  // checking wether there is a picture before appending it  ntebih 5od he iza sar shi 8alat
  //if (tweet_picture != null) {
   // tweet_image.append(tweet_img)

//  }
  
   //like feature 
   likee.addEventListener('click', () => { 
  
    var data = new FormData();
    
    var formdata = new FormData();
    formdata.append("tweet_id",tweet_id);
    formdata.append("user_id", user.id);

    var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
     };

fetch("http://localhost/twitter-clone-project/backend/like_tweet.php", requestOptions)
  .then(response => response.text())
  .then(result => {console.log(JSON.parse(result))
                   nbr.textContent=JSON.parse(result).success
                    if(JSON.parse(result).success==0){
                         likee.src="./images/like.png"}
                    else{likee.src="./images/liked.png"}})
  .catch(error => console.log('error', error));
     })
   }

//display all the lsit of tweets

   function displayLoop(num) {
  for (let i = 0; i < num; i++) {
    fetch(`http://localhost/twitter-clone-project/backend/get_all_tweets.php`)
      .then((res) => res.json())
      .then((data) =>{
        createTweet(
          data.tweets_info[i].id,
          data.tweets_info[i].tweet,
          data.tweets_info[i].picture,
          data.tweets_info[i].first_name,
          data.tweets_info[i].prof_image,
          data.tweets_info[i].user_id,
          data.tweets_info[i].likes
        )
      //  console.log(data.tweets_info[i].prof_image)
      }
      )
  }
}




fetch(`http://localhost/twitter-clone-project/backend/get_all_tweets.php`)
  .then((res) => res.json())
  .then((data) => {displayLoop(data.num)
    console.log(data)})






function createProfileToFollow(user_id, name, username, profile_img) {
 
  let suggestions=document.querySelector(".suggestions")

    let maybeknow=document.createElement("div")
    suggestions.appendChild(maybeknow)
    maybeknow.classList.add("maybeknow")

    let image=document.createElement("img")
    maybeknow.appendChild(image)
    
    let container=document.createElement("div")
    maybeknow.appendChild(container)
    container.classList.add("usr")

    let username_may_now=document.createElement("div")
    container.appendChild(username_may_now)
    
    let email=document.createElement("div")
    container.appendChild(email)
    email.classList.add("email")
    
    let buttoncntainer=document.createElement("div")
    maybeknow.appendChild(buttoncntainer)

    let followbutton=document.createElement("button")
    buttoncntainer.appendChild(followbutton)
    followbutton.classList.add("btn")
    followbutton.classList.add("btn-blue")
    followbutton.classList.add("black")
   
     // INSERTING VALUES

     //name of the user tf
    username_may_now.textContent=name
     //username of the utf
     email.textContent=username
     //prof image of the utf
       if (profile_img) {
         image.src = `./${profile_img}`}
       else {image.src.src = './images/prof.png' }
     

      followbutton.innerHTML = 'Follow'
   console.log("test")
  followbutton.addEventListener('click', () => {
    var formdata = new FormData();
    formdata.append("user_id", user.id);
    formdata.append("other_id", user_id);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    // the follow feature
    fetch("http://localhost/twitter-clone-project/backend/follow_user.php", requestOptions)
   .then(response => response.text())
   .then(result =>{ console.log(JSON.parse(result))
     if (JSON.parse(result)) {
          followbutton.textContent = JSON.parse(result).success

          console.log(JSON.parse(result).success)
        } else {
          console.log(JSON.parse(result).error ? JSON.parse(result).error : JSON.parse(result).empty)
        }
  }
   
   )
   .catch(error => console.log('error', error));
  })



}


 

  function profilesToFollowLoop(data) {
  for (let i = 0; i < data.length; i++) {
    createProfileToFollow(
      data[i].id,
      data[i].first_name,
      "@"+data[i].first_name,
      data[i].prof_image
      
    )
    
  }
}

var formdata = new FormData();
formdata.append("id",user.id);

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("http://localhost/twitter-clone-project/backend/get_random_users.php", requestOptions)
  .then(response => response.text())
  .then(result =>{ console.log(JSON.parse(result))
          profilesToFollowLoop(JSON.parse(result))
  })
  .catch(error => console.log('error', error));

 profilesToFollowLoop(data)



/* upload the image and the text of the tweet into the tweets table*/////NEWWWWWWWWWWWW

  const tweet_action=(data)=>{
  const tweet_image=document.getElementById("tweet_image")
  const convert_image_to_base64 = (file) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  return reader
}
const readerr= convert_image_to_base64(tweet_image.files[0])
readerr.addEventListener('load', () => {
var tweet_image=readerr.result

var content=data["tweet"]


var formdata = new FormData();
formdata.append("user_id",user.id);
formdata.append("tweet", content);
formdata.append("picture",tweet_image);
var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("http://localhost/twitter-clone-project/backend/createtweet.php", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
 })
  }

  tweetbutton.addEventListener("click",()=>{
  var tweet_content=inputtweettext.value
  data["tweet"]=tweet_content
  tweet_action(data)
  // na2es nb3at lid kamen
 setTimeout(()=>window.location.href="./profile.html?userinfo="+useremail, 2000)
})


/////NEWWWWW PROFIILE UPDATEEE

  const edit_prof=(data)=>{
    
  const prof_img=document.getElementById("prof-img")
  const convert_image_to_base64 = (file) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  return reader
}
const readerr= convert_image_to_base64(prof_img.files[0])
readerr.addEventListener('load', () => {
var prof_img=readerr.result


let dob=data["dob"]
let firstname=data["first_name"]
var formdata = new FormData();
formdata.append("first_name",firstname);
formdata.append("dob", dob);
formdata.append("prof_image",prof_img);
formdata.append("id",user.id);

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("http://localhost/twitter-clone-project/backend/edit_profile.php", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
 })
  }

savebtn.addEventListener("click",()=>{

  
  data["first_name"]=updatedname.value
  data["dob"]=updateddate.value

    setTimeout(()=>window.location.href="./profile.html?userinfo="+useremail, 2000)
      edit_prof(data)

})








/*the searchbar which fetch the person wanted create a card for him put him on the top and the create who left */
searchuser.addEventListener("keypress",(e)=>{
  if(e.key==="Enter"){ 
    var usernames="";
    var emails="";
    var data = new FormData();
         data.append('first_name',searchuser.value);
        fetch(`http://localhost/twitter-clone-project/backend/search.php`,{
        method:'POST',
         body:data})
        .then(response => response.text())
        .then(result => {console.log(JSON.parse(result))
         usernames=JSON.parse(result)[0].first_name
         emails=JSON.parse(result)[0].email
         let  deleteditems=document.getElementsByClassName("maybeknow")
         for(var i=0;i<deleteditems.length;i++){
         deleteditems[i].style.display="none"
         }
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
    username.textContent=usernames
    let email=document.createElement("div")
    container.appendChild(email)
    email.textContent=emails
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
    //waiting for the api
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
  //waiting for the api
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
  }}) }) }})










