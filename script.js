var personName = prompt("Welcome to GC Mini Golf! What is your name?")
var gamesToPlay = prompt("Hi, " + personName + "! Would you like to play 3 or 6 holes today?")
gamesToPlay = parseInt(gamesToPlay)
var putts = []

for (var i = 1; i <= gamesToPlay; i +=1){
    var putt = prompt ("How many putts for hole " + i + "? (par is 3)")
    putts.push(parseInt(putt))
}

var coursePar = 3 * gamesToPlay
var sum = 0

for (var i = 0; i < gamesToPlay; i +=1) {
    sum += putts[i]
}

var score = sum - coursePar 
if (score==0){
    console.log("Good game,",personName,". Your total par was: 0")
}else if (score<0){
    console.log("Great job,",personName,"! Your total par was:",score)
}else if (score>0){
    console.log("Nice try,",personName,"... Your total par was: +"+score)
}