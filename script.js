function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function showResults(){
  let score=0;
  let question1=document.getElementById("txt-q1").value; 
  let question2=document.getElementById("txt-q2").value; 
  let question3=document.getElementById("txt-q3").value; 
  let question4=document.getElementById("txt-q4").value;
let results=document.getElementById("result"); 

if(question1== "None of the above"){
score++;
results.innerHTML+="<p>Question 1 - Correct</p>";
}

else{
  results.innerHTML+="<p>Question 1 - Incorrect</p>";
}

if(question2== "It converts the text within it to bold font"){
score++;
results.innerHTML+="<p>Question 2 - Correct</p>";
}

else{
  results.innerHTML+="<p>Question 2 - Incorrect</p>";
}

if(question3== "blue"){
score++;
results.innerHTML+="<p>Question 3 - Correct</p>";
}

else{
  results.innerHTML+="<p>Question 3 - Incorrect</p>";
}

  if(question4== "id"){
score++;
results.innerHTML+="<p>Question 4 - Correct</p>";
}

else{
  results.innerHTML+="<p>Question 4 - Incorrect</p>";
}

//results
results.classList.remove("hidden");
results.innerHTML+="Score:"+score+"/4"; 
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}