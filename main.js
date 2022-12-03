     let readJeopardyData = async () => {
    
     let rawJeopardyData = await fetch ('jeopardy.json');
     //console.log(readJeopardyData);
     let data = await rawJeopardyData.json();
     //console.log(data);

     let groupedData = _.groupBy(data, 'value' );
     //console.log(groupedData);

     //console.log(groupedData.$200)

     //console.log(groupedData.$100)

     let array100 = groupedData.$100;
     let array200 = groupedData.$200;
     let array400 = groupedData.$400;
     let array600 = groupedData.$600;
     let array800 = groupedData.$800;

     let buttons100 = document.querySelectorAll('#section-100-buttons button');
     let buttons200 = document.querySelectorAll('#section-200-buttons button');
     let buttons400 = document.querySelectorAll('#section-400-buttons button');
     let buttons600 = document.querySelectorAll('#section-600-buttons button');
     let buttons800 = document.querySelectorAll('#section-800-buttons button');
     let inputText = document.querySelector('#userInput');
     let form = document.querySelector('#answer');
     let score = document.querySelector('#score');
     let totalScore = 0
     let paragraph = document.querySelector('#question')
     let questions100 = randomQuestion(array100);
     let questions200 = randomQuestion(array200);
     let questions400 = randomQuestion(array400);
     let questions600 = randomQuestion(array600);
     let questions800 = randomQuestion(array800);
    
   
   
    

     for(let i = 0; i < buttons100.length; i++){
            buttons100[i].addEventListener('click', function(){
            questions100 = randomQuestion(array100);
            paragraph.innerText = questions100.question;
            console.log(questions100.question);
            console.log(questions100.answer);
       
           })
           };
           
    for(let i = 0; i < buttons200.length; i++){
            buttons200[i].addEventListener('click', function(){
            questions200 = randomQuestion(array200);
            paragraph.innerText = questions200.question;
            console.log(questions200.question);
            console.log(questions200.answer);
            console.log(totalScore);
           
            })
            };

    for(let i = 0; i < buttons400.length; i++){
            buttons400[i].addEventListener('click', function(){
            questions400 = randomQuestion(array400);
            paragraph.innerText = questions400.question;
            console.log(questions400.question);
            console.log(questions400.answer);
                
            })
            };


    for(let i = 0; i < buttons600.length; i++){
            buttons600[i].addEventListener('click', function(){
            questions600 = randomQuestion(array600);
            paragraph.innerText = questions600.question;
            console.log(questions600.question);
            console.log(questions600.answer);
                    
            })
            };

    for(let i = 0; i < buttons800.length; i++){
            buttons800[i].addEventListener('click', function(){
            questions800 = randomQuestion(array800);
            paragraph.innerText = questions800.question;
            console.log(questions800.question);
            console.log(questions800.answer);
                        
            })
            };


            form.addEventListener('submit',function(event){
               event.preventDefault();
          
               if(inputText.value === questions100.answer){
                  paragraph.innerText = 'Correct!'; totalScore = totalScore + 100; score.innerText = totalScore
                  }else if(inputText.value === questions200.answer){
                            paragraph.innerText = 'Correct!'; totalScore = totalScore + 200; score.innerText = totalScore;
                  }else if(inputText.value === questions400.answer){
                           paragraph.innerText = 'Correct!'; totalScore = totalScore + 400; score.innerText = totalScore;
                  }else if(inputText.value === questions600.answer){
                           paragraph.innerText = 'Correct!'; totalScore = totalScore + 600; score.innerText = totalScore;
                  }else if(inputText.value === questions800.answer){
                           paragraph.innerText = 'Correct!'; totalScore = totalScore + 800; score.innerText = totalScore;
                  }else{paragraph.innerText = 'Incorrect!'
                  }
                                
                  inputText.value = ''
                  });
                           

                        
                        
           
function randomQuestion (array) {
let randomQ = Math.floor(Math.random() * array.length);
let q = array[randomQ];
return q
}

}

 readJeopardyData();



//  if(inputText.value !== questions100.answer){
//     paragraph.innerText = 'Incorrect! The correct answer was:  ' + questions100.answer;
//     console.log(questions100.answer)
//  } else if(inputText.value !== questions200.answer){
//     paragraph.innerText = 'Incorrect! The correct answer was:  ' + questions200.answer;

//  }else if(inputText.value !== questions400.answer){
//     paragraph.innerText = 'Incorrect! The correct answer was:  '+ questions400.answer;
//  }else if(inputText.value !== questions600.answer){
//     paragraph.innerText = 'Incorrect! The correct answer was:  ' + questions600.answer;
//  }else if(inputText.value !== questions800.answer){
//     paragraph.innerText = 'Incorrect! The correct answer was:  ' + questions800.answer;
//  }