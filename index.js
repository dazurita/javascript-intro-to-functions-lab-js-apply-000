function shout(string){
  
  return string.toUpperCase()
  console.log(string)
 
}

function whisper(string){
  
  return string.toLowerCase()
  console.log(string)
}

function logShout(string){

  console.log(string.toUpperCase())
  
  
}

function logWhisper(string){
  
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  if (string === 'I love you, Grandma.'){
    return 'I love you, too.'
  }
  var lowercase = 'hello!'
  var uppercase ='HELLO!';
   
  if (string.toLowerCase() === string){
    
    return 'I can\'t hear you!'
    

     
  }
  
 
  else if (string.toUpperCase() === string){
       
      return 'YES INDEED!';
  }
  
}

