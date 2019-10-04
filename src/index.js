module.exports = function zeros(expression) {
  // your solution
  
  let a = expression.split("*");
  
  
  let twos = 0;
  let fives = 0;
  let step = 0;
  

  a.forEach(element => {if(element.includes("!!")) {

    element = parseInt(element);
    step = 2;
    
  } else {element = parseInt(element)
    step = 1;
    
   }

    
    while(element >= 1){

      let five = element;
      let two = element;
  
      while(five % 5 === 0){
        fives++;
        five /= 5;
      }
  
      while(two % 2 === 0){
        twos++;
        two /= 2; 
      }
      element = element -  step;
    }
  }
    );

 
  if (twos > fives) {
    return fives;
  } else return twos;
}
