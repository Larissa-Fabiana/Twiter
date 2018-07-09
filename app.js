var tweet = document.getElementsByClassName("tweets")[0];
var myButton = document.getElementsByClassName("btn")[0];
var mensage = document.getElementsByClassName("mensages")[0];
var paragraph = document.getElementById("paragraphs");
var counter = document.getElementById("count");
tweet.addEventListener("keyup", event =>{
    event.preventDefault();
    numberCounter();
});
function numberCounter(){
    var sum = 140;
    var text = tweet.value;
    for(var i = 0; i<text.length; i++){ 
        sum = sum - 1;      
    }
    counter.innerHTML = sum;
}
textEntered();
function textEntered(){
    myButton.setAttribute("id", "pressed");
    pressed.addEventListener("click", event => {
        event.preventDefault();
        transformInTweet();
    });
}
function transformInTweet(){
    var div = document.createElement("div");
    div.className = "post";
    div.innerHTML = tweet.value;
    mensage.appendChild(div);
}