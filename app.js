
function transformInTweet(event){
    var tweet = document.getElementsByClassName("tweets")[0];
    // console.log(tweet); sua mensagem aqui
    var div = document.createElement("div");
    div.className = "post";
    div.innerHTML = tweet.value;
    // console.log(div.textContent);
    //div vai ser filha do id mensages
    var mensage = document.getElementById("mensages");
    // console.log(mensage);
    mensage.appendChild(div);
    // console.log(event);
    event.preventDefault();
    var myButton = document.getElementById("btn");
    console.log(myButton.innerHTML);

}
