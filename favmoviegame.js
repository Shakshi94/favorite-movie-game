
let favoritemovie="avatar";

let guess=prompt("Guess my favourite movie!!");


while((guess != favoritemovie) && (guess !="quit")){

   console.log("wrong answer,try again!!");
    guess=prompt("Guess my favourite movie!!");
}

if(guess==favoritemovie){
    console.log(" congrats,Sucessfully guessed!!!");
}else{
    console.log("quit");
}

