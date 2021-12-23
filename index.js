function CalcalateEachWord(Response,CorrectAnswer){
    Response=Response.split(" ");
    CorrectAnswer=CorrectAnswer.split(" ");
    let ResponseScore=0;
    let CorrectAnswerScore=0;
     for (let i of Response){
        if(Number(i)){
             ResponseScore=ResponseScore+4
        }
        else if(i.length>7){
            ResponseScore=ResponseScore+3
        }
        else if(i.length>=5){
            ResponseScore=ResponseScore+1
        }
    }
    
    
     for (let i of CorrectAnswer){
        if(Number(i)){
             CorrectAnswerScore=CorrectAnswerScore+4
        }
        else if(i.length>7){
            CorrectAnswerScore=CorrectAnswerScore+3
        }
        else if(i.length>=5){
            CorrectAnswerScore=CorrectAnswerScore+1
        }
    }
    
    
    
    
    let PercentageOfScore=ResponseScore/CorrectAnswerScore*100
    return PercentageOfScore
    
}

let correctAnswer='There are twenty-four hours in a day, 30 days in a month, and 12 months in the calendar year.';
let response='There are Twenty-Four hours in a day. A year has 14 months.';
let Percentage=CalcalateEachWord(response,correctAnswer);

console.log(Percentage)