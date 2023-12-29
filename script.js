let heart=document.getElementsByClassName("heart_btn");
for (let index = 0; index < heart.length; index++) {
     // Heart Button
  heart[index].addEventListener("click",function(){
    if(heart[index].style.color=="grey"){
        heart[index].style.color="black"
    }
    else{
        heart[index].style.color="grey"
    }
})
    
}
 