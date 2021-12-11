function start(){
    navigator.mediaDevices.getUserMedia({audio : true});
    soundmodel = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/M0YAgxm0g/model.json", modelloaded);
}

function modelloaded(){
    soundmodel.classify(getresults);
}

function getresults(error,results){
   if(error){
       console.error(error);
   }
   else{
       console.log(results);
       document.getElementById("sound_result").innerHTML = "I can hear "+ results[0].label;
       document.getElementById("confidence_result").innerHTML = "I am "+ (results[0].confidence * 100).toFixed(2) + " % sure ";
       soundname = results[0].label;

       if(soundname=="Clap"){
           document.getElementById("alien1").src="aliens-01.gif";
           document.getElementById("alien2").src="aliens-02.png";
           document.getElementById("alien3").src="aliens-03.png";
           document.getElementById("alien4").src="aliens-04.png";
       }
       
       if(soundname=="Knock"){
        document.getElementById("alien1").src="aliens-01.png";
        document.getElementById("alien2").src="aliens-02.gif";
        document.getElementById("alien3").src="aliens-03.png";
        document.getElementById("alien4").src="aliens-04.png";
    }

    if(soundname=="Whistle"){
        document.getElementById("alien1").src="aliens-01.png";
        document.getElementById("alien2").src="aliens-02.png";
        document.getElementById("alien3").src="aliens-03.gif";
        document.getElementById("alien4").src="aliens-04.png";
    }

    if(soundname=="Scream"){
        document.getElementById("alien1").src="aliens-01.png";
        document.getElementById("alien2").src="aliens-02.png";
        document.getElementById("alien3").src="aliens-03.png";
        document.getElementById("alien4").src="aliens-04.gif";
    }

   }
}
