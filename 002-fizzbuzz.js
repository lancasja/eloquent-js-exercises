for (var i = 1; i <= 100; i++) {

  if (i % 3 === 0) {
    
    if (i % 5 === 0) {
      console.log('FizzBuzz');
    }
    else {
      console.log('fizz');
    }
  }
  
  else if (i % 5 === 0 && i % 3 != 0) {
    console.log('buzz');
  }
  
  else {
    console.log(i);
  }
}