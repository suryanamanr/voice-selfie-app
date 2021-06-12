var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function button() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if (Content == "take my selfie") {
        speech();
    }
}

function speech() {
    var synth = window.speechSynthesis;
    data = "taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function() {
        take_snap();
        save();
    }, 5000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");

function take_snap() { Webcam.snap(function(data_uri) { document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>'; }); }

function save() {
    ref = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    ref.href = image;
    ref.click();
}