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
        ac.sound.pause();
    }
    else if(input != answer){
        alert("Try Again!")
    }

})
}

//Color Changing background function by Constare if issues
function pressed(){
    var text = document.getElementById("inputan").value;
    /* background color change */if (text === "background red"){
        document.getElementById("color").style.backgroundColor = "red";
    } else if (text === "background blue") {
        document.getElementById("color").style.backgroundColor = "blue";
    } else if (text === "background green") {
        document.getElementById("color").style.backgroundColor = "green";
    } else if (text === "background yellow") {
        document.getElementById("color").style.backgroundColor = "yellow";
    } else if (text === "background purple") {
        document.getElementById("color").style.backgroundColor = "purple";
    } else if (text === "background grey") {
        document.getElementById("color").style.backgroundColor = "grey";
    } else if (text === "background black") {
        document.getElementById("color").style.backgroundColor = "black";
    } else if (text === "background pink") {
        document.getElementById("color").style.backgroundColor = "pink";
    } else if (text === "background teal"){
        document.getElementById("color").style.backgroundColor = "cyan";
    } /*text color change*/ 
    else if (text === "text red") {
        document.getElementById("color").style.color = "red";
    } else if (text === "text blue") {
        document.getElementById("color").style.color = "blue";
    } else if (text === "text green") {
        document.getElementById("color").style.color = "green";
    } else if (text === "text yellow") {
        document.getElementById("color").style.color = "yellow";
    } else if (text === "text purple") {
        document.getElementById("color").style.color = "purple";
    } else if (text === "text grey") {
        document.getElementById("color").style.color = "grey";
    } else if (text === "text black") {
        document.getElementById("color").style.color = "black";
    } else if (text === "text pink") {
        document.getElementById("color").style.color = "pink";
    } else if (text === "text teal"){
        document.getElementById("color").style.color = "cyan";   
}
}
window.onload=function(){
document.getElementById("todo").addEventListener("click", function (){
    location.href = "todo.html"
})
}