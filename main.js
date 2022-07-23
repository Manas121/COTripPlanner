
class destination {

  constructor (name, family_orient, type, season, budget,road, count) {

    this.name = name;
    this.family_orient = family_orient;
    this.type = type;
    this.season = season;
    this.budget = budget;
    this.road = road;
    this.count = 0;

  };

  


};


const destination1 = new destination("Aspen", "yes", "mountains", "winter", "extremely expensive", "yes");
const destination2 = new destination("Steamboat", "yes", "mountains", "winter", "expensive", "yes");
const destination3 = new destination("Rocky Mountain NP", "yes", "mountains", "winter/summer", "not expensive", "yes");
const destination4 = new destination("Colorado Springs", "yes", "city", "mountains", "summer", "not expensive", "no");
const destination5 = new destination("Denver", "yes", "city", "winter/summer", "expensive", "no");
const destination6 = new destination("Great Sand Dunes NP", "yes", "mountains", "summer", "not expensive", "no");
const destination7 = new destination("Telluride", "yes", "mountains", "winter", "expensive", "yes");
const destination8 = new destination("Vail", "yes", "mountains", "winter", "very expensive", "no");
const destination9 = new destination("Hanging lake", "yes", "mountains", "summer", " not expensive", "no");
const destination10 = new destination("Mesa Verde National Park", "yes", "cultural", "summer", "not expensive", "yes");






let slideIndex = 1;
showSlides(slideIndex);

let prevbutton = document.getElementsByClassName("prev");
let nextbutton = document.getElementsByClassName("next");


let question1Radios = document.getElementsByName("question1");
let question2Radios = document.getElementsByName("question2");
let question3Radios = document.getElementsByName("question3");
let question4Radios = document.getElementsByName("question4");
let question5Radios = document.getElementsByName("question5");
let question6Radios = document.getElementsByName("question6");
let question7Radios = document.getElementsByName("question7");
let question8Radios = document.getElementsByName("question8");


let answers  = {answer1: "", answer2: "", answer3: "", answer4: "", answer5: "", answer6: "", answer7: "", answer8: ""};

function saveResult () {

if (slideIndex == 1) {



for (i = 0, length = question1Radios.length; i < length; i++) {

  if (question1Radios[i].checked) {
    // do whatever you want with the checked radio
    
     answers.answer1 = question1Radios[i].value;

    // only one radio can be logically checked, don't check the rest
    break;
  }

}



} else if (slideIndex == 2) {



  for (i = 0, length = question2Radios.length; i < length; i++) {

    if (question2Radios[i].checked) {
      // do whatever you want with the checked radio
      
       answers.answer2 = question2Radios[i].value;
  
      // only one radio can be logically checked, don't check the rest
      break;
    }
  
  }


} else if (slideIndex == 3) {



  for (i = 0, length = question3Radios.length; i < length; i++) {

    if (question3Radios[i].checked) {
      // do whatever you want with the checked radio
      
       answers.answer3 = question3Radios[i].value;
  
      // only one radio can be logically checked, don't check the rest
      break;
    }
  
  }


} else if (slideIndex == 4) {



  for (i = 0, length = question4Radios.length; i < length; i++) {

    if (question4Radios[i].checked) {
      // do whatever you want with the checked radio
      
       answers.answer4 = question4Radios[i].value;
  
      // only one radio can be logically checked, don't check the rest
      break;
    }
  
  }


} else if (slideIndex == 5) {



  for (i = 0, length = question5Radios.length; i < length; i++) {

    if (question5Radios[i].checked) {
      // do whatever you want with the checked radio
      
       answers.answer5 = question5Radios[i].value;
  
      // only one radio can be logically checked, don't check the rest
      break;
    }
  
  }


} else if (slideIndex == 6) {



  for (i = 0, length = question6Radios.length; i < length; i++) {

    if (question6Radios[i].checked) {
      // do whatever you want with the checked radio
      
       answers.answer6 = question6Radios[i].value;
  
      // only one radio can be logically checked, don't check the rest
      break;
    }
  
  }


} else if (slideIndex == 7) {



  for (i = 0, length = question7Radios.length; i < length; i++) {

    if (question7Radios[i].checked) {
      // do whatever you want with the checked radio
      
       answers.answer7 = question7Radios[i].value;
  
      // only one radio can be logically checked, don't check the rest
      break;
    }
  
  }


}


}


// Next/previous controls
function plusSlides(n) {

  

  saveResult();

  ansreceived = true;

  if (slideIndex==1) {

  if (answers.answer1=="") {
  ansreceived= false;
  alert("answer kar bhenchod");
  }

  }

  if (slideIndex==2) {

    if (answers.answer2==""){
    ansreceived= false;
    alert("answer kar bhenchod");
    }

  
  }

  if (slideIndex==3) {

    if (answers.answer3==""){
    ansreceived= false;
    alert("answer kar bhenchod");
    }

  
  }

  if (slideIndex==4) {

    if (answers.answer4==""){
    ansreceived= false;
    alert("answer kar bhenchod");
    }

  
  }

  if (slideIndex==5) {

    if (answers.answer5==""){
    ansreceived= false;
    alert("answer kar bhenchod");
    }

  
  }

  if (slideIndex==6) {

    if (answers.answer6==""){
    ansreceived= false;
    alert("answer kar bhenchod");
    }

  
  }

  if (slideIndex==7) {

    if (answers.answer7==""){
    ansreceived= false;
    alert("answer kar bhenchod");
    }

  
  }



  if (ansreceived)
  showSlides(slideIndex += n);
  else
  showSlides(slideIndex);



  if (slideIndex == 1) {

  
    prevbutton[0].style.display = "none";
  
  
  } else {
  
    prevbutton[0].style.display = "block";
  
  }
  
  if (slideIndex == 8) {
  
    
    nextbutton[0].style.display = "none";
    
    
  } else {
  
    nextbutton[0].style.display = "block";
  
  
  }




}




function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    slides[slideIndex-1].style.display = "block";

    let submitButton = document.getElementsByClassName("submitbutton");

    if (slideIndex==8)
    submitButton[0].style.display = "block";
    else
    submitButton[0].style.display = "none";
    

    
}

let destinations = [destination1, destination2, destination3, destination4, destination5, destination6, destination7, destination8, destination9, destination10];

let finalDest = destinations[0];

function calculateResult () {


for (i = 0; i < destinations.length; i++) {


  if (answers.answer2 == "Mountains" && destinations[i].type == "mountains") 
   destinations[i].count++;

  if (answers.answer2 == "Cultural/Historical" && destinations[i].type == "cultural") 
   destinations[i].count++;

  if (answers.answer2 == "Modern, city-like" && destinations[i].type == "city") 
   destinations[i].count++;

  if (answers.answer2 == "Modern, city-like" && destinations[i].type == "city") 
   destinations[i].count++;

  if (answers.answer4 == "Summer" && (destinations[i].season == "summer" || destinations[i].season == "winter/summer")) 
   destinations[i].count++;

  if (answers.answer4 == "Winter" && (destinations[i].season == "winter" || destinations[i].season == "winter/summer")) 
   destinations[i].count++;

  if (answers.answer5 == "200-500" && destinations[i].budget == "not expensive") 
   destinations[i].count++;

  if (answers.answer5 == "500-1000" && destinations[i].budget == "expesive") 
   destinations[i].count++;

  if (answers.answer5 == "1000-2000" && destinations[i].budget == "very expesive") 
   destinations[i].count++;

  if (answers.answer5 == "2000+" && destinations[i].budget == "extremely expesive") 
   destinations[i].count++;

  if (answers.answer7 == "Yes" && destinations[i].road == "yes") 
   destinations[i].count++;

  if (answers.answer7 == "No" && destinations[i].road == "no") 
   destinations[i].count++;


}


 
 
for (i = 0; i < destinations.length; i++) {
 
 
 if (destinations[i].count > finalDest.count)
 finalDest = destinations[i];
 
 
}



}


function submitResponse () {


  if (slideIndex == 8) {



    for (i = 0, length = question8Radios.length; i < length; i++) {
  
      if (question8Radios[i].checked) {
        // do whatever you want with the checked radio
        
         answers.answer8 = question8Radios[i].value;
    
        // only one radio can be logically checked, don't check the rest
        break;
      }
    
    }
  
  
  } 


  ansreceived = true;
  if (slideIndex==8) {

    if (answers.answer8==""){
    ansreceived= false;
    alert("answer kar bhenchod");
    }

  
  }

  if (ansreceived == false)
    showSlides(slideIndex);

  else {

  for (i = 0, length = question8Radios.length; i < length; i++) {

    if (question8Radios[i].checked) {
      // do whatever you want with the checked radio
      
       answers.answer8 = question8Radios[i].value;
  
      // only one radio can be logically checked, don't check the rest
      break;
    }
  
  }

   calculateResult();


   let responseElement = document.getElementsByClassName("postsubmit");

    let resultHtml = document.getElementsByClassName("postsubmitmessage");

    responseElement[0].style.display = "block";

    resultHtml[0].innerHTML = "Your responses have been recorded! Here is your result: " + finalDest.name;



    let leftbutton = document.getElementsByClassName("prev");
    leftbutton[0].style.display = "none";

    let rightbutton = document.getElementsByClassName("next");
    rightbutton[0].style.display = "none";

    let _slides = document.getElementsByClassName("mySlides");
 
    for (i = 0; i < _slides.length; i++) {

     _slides[i].style.display = "none";
    
    }

    
    let submitButton = document.getElementsByClassName("submitbutton");

    submitButton[0].style.display = "none";


 }

}





