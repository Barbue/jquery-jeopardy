let readJeopardyData = async () => {
    
    let rawJeopardyData = await fetch ('jeopardy.json');
    //console.log(readJeopardyData);
    let data = await rawJeopardyData.json();
    //console.log(data);

    let groupedData = _.groupBy(data, 'value' );
    //console.log(groupedData);

    //console.log(groupedData.$200)

    //console.log(groupedData.$100)

     let array100 = groupedData.$100
     let array200 = groupedData.$200
     let array400 = groupedData.$400
     let array600 = groupedData.$600
     let array800 = groupedData.$800

    let buttons100 = document.querySelectorAll('#section-100-buttons button');
    let buttons200 = document.querySelectorAll('#section-200-buttons button');
    let buttons400 = document.querySelectorAll('#section-400-buttons button');
    let buttons600 = document.querySelectorAll('#section-600-buttons button');
    let buttons800 = document.querySelectorAll('#section-800-buttons button');
    let submitButton = document.querySelector('#submitButton1');
    let inputText = document.querySelector('#userInput');
    let form = document.querySelector('#answer');
    let score = document.querySelector('#score');
    let totalScore = 0

    



    //console.log(buttons100);

    for(let i = 0; i < buttons100.length; i++){
        buttons100[i].addEventListener('click', function(){
            // function randomQuestion (array) {
            //     let randomQ = Math.floor(Math.random() * array.length);
            //     let q = array[randomQ];
            //     return q
                
            // }
        let question = randomQuestion(array100)
        let paragraph = document.querySelector('#question')
         paragraph.innerText = question.question
         console.log(question.question)
         console.log(question.answer)
         form.addEventListener('submit',function(event){
            event.preventDefault();
            if(inputText.value === question.answer){
               paragraph.innerText = 'Correct!';  totalScore = totalScore + 100; 
               score.innerText = totalScore
           } else if(inputText.value !== question.answer){
            paragraph.innerText = 'Incorrect!'; totalScore = totalScore - 100; score.innerText = totalScore

           }
           })
           })
           }

        for(let i = 0; i < buttons200.length; i++){
            buttons200[i].addEventListener('click', function(){
            //     function randomQuestion (array) {
            //     let randomQ = Math.floor(Math.random() * array.length);
            //     let q = array[randomQ];
            //     return q
            // }
             let question = randomQuestion(array200);
             let paragraph = document.querySelector('#question');
             paragraph.innerText = question.question
             console.log(question.question)
             console.log(question.answer)
             form.addEventListener('submit',function(event){
                event.preventDefault();
                if(inputText.value === question.answer){
                    paragraph.innerText = 'Correct!';  totalScore = totalScore + 200; 
                    score.innerText = totalScore
                } else if(inputText.value !== question.answer){
                 paragraph.innerText = 'Incorrect!'; totalScore = totalScore - 200; score.innerText = totalScore
                }
                })
                })
                }

            for(let i = 0; i < buttons400.length; i++){
                buttons400[i].addEventListener('click', function(){
                //     function randomQuestion (array) {
                //     let randomQ = Math.floor(Math.random() * array.length);
                //     let q = array[randomQ];
                //     return q
                // }
                 let question = randomQuestion(array400);
                 let paragraph = document.querySelector('#question');
                 paragraph.innerText = question.question
                 console.log(question.question)
                 console.log(question.answer)
                 form.addEventListener('submit',function(event){
                    event.preventDefault();
                    if(inputText.value === question.answer){
                        paragraph.innerText = 'Correct!';  totalScore = totalScore + 400; 
                        score.innerText = totalScore
                    } else if(inputText.value !== question.answer){
                     paragraph.innerText = 'Incorrect!'; totalScore = totalScore - 400; score.innerText = totalScore
         
                    }
                    })
                    })
                    }


                for(let i = 0; i < buttons600.length; i++){
                    buttons600[i].addEventListener('click', function(){
                    //     function randomQuestion (array) {
                    //     let randomQ = Math.floor(Math.random() * array.length);
                    //     let q = array[randomQ];
                    //     return q
                    // }
                     let question = randomQuestion(array600);
                     let paragraph = document.querySelector('#question')
                     paragraph.innerText = question.question
                     console.log(question.question)
                     console.log(question.answer)
                     form.addEventListener('submit',function(event){
                        event.preventDefault();
                        if(inputText.value === question.answer){
                            paragraph.innerText = 'Correct!'; totalScore = totalScore + 600; score.innerText = totalScore
                        } else if(inputText.value !== question.answer){
                         paragraph.innerText = 'Incorrect!'; totalScore = totalScore - 600; score.innerText = totalScore
             
                        }
                        })
                        })
                        }

                    for(let i = 0; i < buttons800.length; i++){
                        buttons800[i].addEventListener('click', function(){
                        //     function randomQuestion (array) {
                        //     let randomQ = Math.floor(Math.random() * array.length);
                        //     let q = array[randomQ];
                        //     return q
                        // }
                         let question = randomQuestion(array800);
                         let paragraph = document.querySelector('#question');
                         paragraph.innerText = question.question
                         console.log(question.question)
                         console.log(question.answer)
                         form.addEventListener('submit',function(event){
                            event.preventDefault();
                         if(inputText.value === question.answer){
                            paragraph.innerText = 'Correct!';  totalScore = totalScore + 800; score.innerText = totalScore
                         } else if(inputText.value !== question.answer){
                         paragraph.innerText = 'Incorrect!'; totalScore = totalScore - 800; score.innerText = totalScore

                         }
                         })
                         })
                         }

                        
                        
            //             form.addEventListener('submit',function(event){
            //                event.preventDefault();
                           
            // //                let question = randomQuestion(array200)
            // //  let paragraph = document.querySelector('p')
            // //  paragraph.innerText = question.question
                          
            //                console.log(inputText.value)
            //                console.log(question.answer)

            //             //    if(inputText.value === question.answer){
                                


            //             //  }

                            


            //             })

                        
            
            
            
            
            
            
function randomQuestion (array) {
let randomQ = Math.floor(Math.random() * array.length);
let q = array[randomQ];
return q
                            
}

}

 readJeopardyData();