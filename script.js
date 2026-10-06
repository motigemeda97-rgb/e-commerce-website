const bar=document.getElementById("bar");
const navbar=document.getElementById("navbar");
const bag1=document.getElementById("bag1");
const close=document.getElementById("close");
const bag0=document.getElementById("bag0");
if(bar){
  bar.addEventListener("click", function(){
    console.log("clicked");
    navbar.classList.add("active");
  bag1.classList.add("ariyi");
  bag0.classList.add("hide-bag");
  })
  
}
if(close){
close.addEventListener("click", function(){
 navbar.classList.remove("active");
 bag1.classList.remove("ariyi");
 close.classList.remove("close");
})
}

