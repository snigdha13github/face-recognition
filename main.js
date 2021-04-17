Webcam.set({
    width:350,
    height:300,
    image_format:'png',png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_picture(){
    Webcam.snap(function(data_uri)
    {document.getElementById("result").innerHTML='<img id="capturedimage"src="'+data_uri+'"/>';
    });
}
console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/BmR3O3_o5/model.json',modelLoaded);

function modelLoaded()
{
    console.log("Model loaded");
}
function check()
{
    img=document.getElementById("capturedimage");
    classifier.classify(img,gotResult);   
}
function gotResult(error,results)
{
    if(error)
    {
        console.log (error);
        
    }
    else{
      console.log (results);
      document.getElementById("object_name").innerHTML=results[0].label;
      document.getElementById("percentage").innerHTML=results[0].confidence;
    }
}