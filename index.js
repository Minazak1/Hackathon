function smipleMathProblemGenerator() {
    arr = ["+","-"];
    randomElement = arr[Math.floor(Math.random() * arr.length)];
    var a = Math.floor(Math.random() * 10) + 1;
    var b = Math.floor(Math.random() * 10) + 1;
    console.log(a + randomElement + b);
    document.getElementById("equation").innerHTML = a + randomElement + b
    }
    smipleMathProblemGenerator();