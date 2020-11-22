function simpleMathProblemGenerator() {
    var answer;
    arr = ["+","-"];
    randomElement = arr[Math.floor(Math.random() * arr.length)];
    var a = Math.floor(Math.random() * 10) + 1;
    var b = Math.floor(Math.random() * 10) + 1;
    console.log(a + randomElement + b);
    if(randomElement == "+")
        answer = (a+b);
    if(randomElement == "-")
        answer = (a-b);
    console.log(answer);
    }
function normalMathProblemGenerator() {
    answer = 0;
    arr = ["+","-","*","/"];
    randomElement = arr[Math.floor(Math.random() * arr.length)];
    var a = Math.floor(Math.random() * 100) + 1;
    var b = Math.floor(Math.random() * 10) + 1;
    c = (a + randomElement + b);
    console.log(a + randomElement + b);
    if(randomElement == "+")
    answer = (a+b);
    if(randomElement == "-")
    answer = (a-b);
    if(randomElement == "*")
    answer = (a*b);
    if(randomElement == "/")
    {
    answer = (a/b);
    if (answer%2 !=0)
    normalMathProblemGenerator();
    }
    // console.log(answer)
    }
    normalMathProblemGenerator();
    document.getElementById("equation").innerHTML = c

    window.onload=function(){
document.getElementById("submit").addEventListener("click", function (){
    var input = document.getElementById("inputan").value
    
    if (input == answer){
        alert("Great Job")
        window.location.reload(true);
        normalMathProblemGenerator()
        document.getElementById("equation").innerHTML = c
    }
    else if(input != answer){
        alert("Try Again!")
    }

})
}
var x = document.getElementById("AlarmAudio");

function playAudio(){
    x.play();
}
function pauseAudio(){
    x.pause();
}
<!-- Color Changing background function by Constare if issues-->
function pressed(){
    var text = document.getElementById("inputan").value;
    if (text === "red"){
        document.getElementById("color").style.backgroundColor = "red";
    } else if (text === "blue") {
        document.getElementById("color").style.backgroundColor = "blue";
    } else if (text === "green") {
        document.getElementById("color").style.backgroundColor = "green";
    } else if (text === "yellow") {
        document.getElementById("color").style.backgroundColor = "yellow";
    } else if (text === "purple") {
        document.getElementById("color").style.backgroundColor = "purple";
    } else if (text === "grey") {
        document.getElementById("color").style.backgroundColor = "grey";
    } else if (text === "black") {
        document.getElementById("color").style.backgroundColor = "black";
    } else if (text === "pink") {
        document.getElementById("color").style.backgroundColor = "pink";
    } else if (text === "teal" || "cyan"){
        document.getElementById("color").style.backgroundColor = "cyan";
    }
}
