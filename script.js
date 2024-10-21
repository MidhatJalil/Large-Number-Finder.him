function display()
{
        let userInput1 = document.getElementById('input1').value;
        let userInput2 = document.getElementById('input2').value;
    
        let result = document.getElementById('result');
        if (userInput1 > userInput2){
            result.innerHTML = (`1st value ${userInput1} is greater than 2nd value ${userInput2}`);
        }
        else
        if (userInput2 > userInput1){
            result.innerHTML = (`2nd value ${userInput2} is greater than 1st value ${userInput1}`);
        }
    
        else   {
            result.innerHTML  = (`Both numbers are equal`);
        }
    }