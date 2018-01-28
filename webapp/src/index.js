import code from './code';


$(document).ready(function(){

  $( "#inputMessageButton" ).click(function() {
    let message = $('#inputMessage').val();
    let morseResponse = [];
    for(let i of message){
      let letterUpperCase=i.toUpperCase();
      morseResponse.push(code[letterUpperCase]);
      //console.log(letterUpperCase+'   '+code[letterUpperCase]);
    }
    let encodedMessage="";
    for(let c of morseResponse){
      encodedMessage=encodedMessage+"   "+c;
    }
    console.log(encodedMessage);
    $("#encodedResponse").append( "<p>"+encodedMessage+"</p>" );
  });

  $( "#inputSymbolButton" ).click(function() {
    let inputSymbol = $('#inputSymbol').val();
    let k=Object.keys(code).find(key => code[key] === inputSymbol);
    console.log(k.toString());
    $("#letterResponse").append( "<p>"+k.toString()+"</p>" );
  });

  $( "#randomButton" ).click(function() {
    let keys = Object.keys(code);
    let randomKey = keys[ keys.length * Math.random() << 0];
    //console.log(randomKey);
    $("#randomResponse").empty();
    $("#randomResponse").append("<p>"+randomKey+"</p>");
  });

  $( "#inputUserResponseButton" ).click(function() {
    let randomKey = $("#randomResponse").text();
    //console.log(randomKey);
    let userInputResponse = $('#inputUserResponse').val().toUpperCase();
    let userAnswer=Object.keys(code).find(key => code[key] === userInputResponse);
    //console.log('Your answer is:   '+userInputResponse+'   '+userAnswer);
    $("#userAnswer").append( '<p>Your answer is:   '+userInputResponse+'   '+userAnswer+"</p>" );
    let correctLetter = code[randomKey];
    //console.log('The correct answer is:   '+correctLetter+' '+ randomKey);
    $("#correctAnswer").append( '<p>The correct answer is:   '+correctLetter+' '+ randomKey+"</p>" );
  });
});

