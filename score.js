function calculateScore() {
    console.log("calculate score")
    let score = 0;
    let formCompleted = true;
    const correctAnswers = ["b", "a", "c", "c", "a"];
    const nextCorrectAnswers = ["a", "d", "d", "b", "d"];
    for (let i = 1; i <= 5; i++) {
        console.log("calculate score"+i)
        let userAnswer = document.querySelector('input[name="question' + i + '"]:checked');
        if (!userAnswer) {
            alert("Please answer all the questions before submitting.");
            formCompleted = false;
            break;
        }
        if (userAnswer.value === correctAnswers[i-1]) {
            score+=20;
        }else if(userAnswer.value === nextCorrectAnswers[i-1]){
            score+=10;
        }else{
            score+=5;
        }
    }
    if(formCompleted){
    document.getElementById("score").innerHTML = "Your score is " + score + " out of 100.";
    document.getElementById("score-popup").style.display = "block";
    }
    document.querySelector(".close-popup").onclick = function() {
        document.getElementById("score-popup").style.display = "none";
    }
    return false;
}