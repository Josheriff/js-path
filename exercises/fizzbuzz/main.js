var randomNum = Math.round(Math.random() * 15);

console.log(randomNumber);
/*
all of this values, are false and skip the if
if (false)
if (null)
if (undefined)
if (0)
if (NaN)
if ('')
if ("")
if (document.all) [1]
*/
function fizzBuzz(randomNumber){
  if (randomNumber){

    if (randomNumber % 15 === 0 ) {
      console.log('fizzbuzz');
      return
    } if (randomNumber % 3 === 0) {
      console.log('fizz');
      return
    } if (randomNumber % 5 === 0) {
      console.log('buzz');
      return
    } else {
      console.log('FAIL!');
      return
    }
  }  
}

fizzBuzz(randomNum);
