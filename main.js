//var pizza = 0;

//function submit_button(){

   // pizza = Number(document.getElementById("order").value);

   // document.getElementById("hr").innerHTML = "Your pizza or order: " + pizza;










    
   // speak();

//function speak(){
  //  var synth= window.speechSynthesis;


   // speak_data = "So Your pizza or your order is " + pizza;

  //  var utterThis = new SpeechSynthesisUtterance(speak_data);
  //  synth.speak(utterThis);

//}}












var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

var textbox= document.getElementById("textbox");

function submit_button(){

    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    speak();



}
function speak(){
    var synth= window.speechSynthesis;


    speak_data = document.getElementById("textbox").innerHTML;

    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

}


