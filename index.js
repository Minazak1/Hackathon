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
    arr = ["+","-","*","/"];
    randomElement = arr[Math.floor(Math.random() * arr.length)];
    var a = Math.floor(Math.random() * 100) + 1;
    var b = Math.floor(Math.random() * 10) + 1;
    console.log(a + randomElement + b);
    }
    simpleMathProblemGenerator();
