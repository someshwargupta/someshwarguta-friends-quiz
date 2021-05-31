readLineSync=require("readline-sync");

username=readLineSync.question("May,I know your name? ");
console.log("\n Welcome! "+username +"\n");

console.log("You will  be given two questions \n"+"--------------------------------");
questions=[
  {
    question: 'How many main characters are there in F.R.I.E.N.D.S.? ',
    answer :'6',
  },
  { 
    question:'How many roses did ross send to emily? ',
    answer:'72',
  }
];
var score=0;
function play(question,answer){
  var ans=readLineSync.question(question,{
    hideEchoBack:true
  });
  if(ans===answer)
  {
    console.log("You are correct");
    score++;
  }
  else
  {
    console.log("You are wrong");
  }
}
for (var i=0;i<questions.length;i++){
  a=questions[i];
  play(a.question,a.answer);
  console.log("--------");

}
console.log("Yay! Your score is "+score);

