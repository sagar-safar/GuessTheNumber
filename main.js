let num = Math.floor(Math.random()*100+1);

let count = 0;



function decide(e){
    let guess = Number(document.querySelector("input").value);
    document.querySelector("input").value = "";
    document.querySelector('input').focus()

   
    if(count===0){
        document.querySelector('.guesses').textContent='Previous Guesses:';
        document.querySelector('.guesses').style.backgroundColor="yellow"


    }
    
    if(count===9){
        document.querySelector(".guesses").textContent = document.querySelector(".guesses").textContent + " " + guess;
        document.querySelector(".ans").textContent = "Game Over!!!";
        document.querySelector('.ans').style.backgroundColor="red"
        document.querySelector('.hint').textContent=''
      
        
        setGameOver()
        return 0;
        

    }



    count += 1;


    
    


    if(num===guess){
        document.querySelector(".ans").textContent = "Congratulations!";
        document.querySelector(".guesses").textContent = document.querySelector(".guesses").textContent + " " + guess;
        document.querySelector('.ans').style.backgroundColor="green"
        document.querySelector('.hint').textContent=''
       

        setGameOver()
    }

    else if(guess<num){
        document.querySelector(".hint").textContent = "too low"
        document.querySelector('.hint').style.backgroundColor="pink"
        document.querySelector(".ans").textContent = "wrong"
        document.querySelector('.ans').style.backgroundColor="red"
        document.querySelector(".guesses").textContent = document.querySelector(".guesses").textContent + " " + guess
       
    }

    else{
        document.querySelector(".hint").textContent = "too high"
        document.querySelector('.hint').style.backgroundColor="pink"
        document.querySelector(".ans").textContent = "wrong"
        document.querySelector('.ans').style.backgroundColor="red"
        document.querySelector(".guesses").textContent = document.querySelector(".guesses").textContent + " " + guess
  

    }


    

}

/* function is executed when game is over..*/


function setGameOver() {
    document.querySelector('input').disabled = true;
    document.querySelector('.btn').disabled = true;
    resetButton = document.createElement('button');
    resetButton.className='new-btn'
    resetButton.textContent = 'Start again';
    
    document.getElementById("game").appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);

  }




  function resetGame(){
    document.querySelector('input').disabled = false;
    document.querySelector('.btn').disabled = false;
    document.querySelector('.guesses').textContent='';
    document.querySelector('.ans').textContent=''
    document.querySelector('input').value="";
    document.querySelector('input').focus();
    document.querySelector('.new-btn').remove()
    count = 0;
    num = Math.floor(Math.random()*100+1);


  }


  document.querySelector(".btn").addEventListener('click',decide)