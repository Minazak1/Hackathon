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

    }
    normalMathProblemGenerator();
    document.getElementById("equation").innerHTML = c

    window.onload=function(){
document.getElementById("submit").addEventListener("click", function (){
    var input = document.getElementById("inputan").value
    
    if (input == answer){
        alert("Good Morning")
        window.location.reload(false);
    }
    else if(input != answer){
        alert("Try Again!")
    }

})
}