var tweet = document.getElementsByClassName("tweets")[0];
var myButton = document.getElementsByClassName("btn")[0];
var mensage = document.getElementsByClassName("mensages")[0];
var counter = document.getElementById("count");

tweet.addEventListener("keyup", event =>{
    event.preventDefault();
    numberCounter();
    textSize();
});
function textSize(){
    while(tweet.scrollHeight > tweet.offsetHeight){
        tweet.rows += 1;
    }
}
function numberCounter(){
    var sum = 140;
    var text = tweet.value;
    for(var i = 0; i<text.length; i++){ 
        sum = sum - 1;      
    }
    counter.innerHTML = sum;
    if(sum>130){
        counter.style.color = "blue";
    }else if(sum>120){
        counter.style.color = "green";
    }else if(sum>0){
        counter.style.color = "orange";
    }else if(sum<0){
        counter.style.color = "red";
    }
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
    moment.locale('pt-BR');
    var date = document.createElement("p");
    date.innerHTML = moment().format('HH:mm A');
    div.appendChild(date);
}