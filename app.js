var tweet = document.getElementsByClassName("tweets")[0];
var myButton = document.getElementsByClassName("btn")[0];
var mensage = document.getElementsByClassName("mensages")[0];
var counter = document.getElementById("count");
var myForm = document.getElementById("forms");
tweet.addEventListener("keyup", event =>{
  numberCounter();
  textSize();
});
function textSize(){
  tweet.style.height = "";
  tweet.style.height = tweet.scrollHeight + "px";
}
function numberCounter(){
  var text = tweet.value;
  var numberValue = 140 - text.length;
  counter.innerHTML = numberValue; 
  if(text.length > 140 || text.length <=0){
    myButton.setAttribute("disabled", "");
    myButton.removeAttribute("id");
  } 
  if(text.length>140){
    counter.style.color = "red";
  }else if(text.length>130){
    counter.style.color = "orange";
    myButton.setAttribute("id", "pressed");
    myButton.removeAttribute("disabled");
  }else if(text.length>120){
    counter.style.color = "green";
    myButton.setAttribute("id", "pressed");
    myButton.removeAttribute("disabled");
  }else if(text.length<=120 && text.length >= 0){
    counter.style.color = "blue";
    myButton.setAttribute("id", "pressed");
    myButton.removeAttribute("disabled");
  }
}
textEntered();
function textEntered(){
  myButton.addEventListener("click", event => {
    event.preventDefault();
    transformInTweet();
    myForm.reset();
    numberCounter().reset();
  });
}
function transformInTweet(){
  var div = document.createElement("div");
  div.className = "post";
  div.innerHTML = tweet.value;
  mensage.prepend(div);
  moment.locale('pt-BR');
  var date = document.createElement("p");
  date.innerHTML = moment().format('HH:mm A');
  div.appendChild(date);
}