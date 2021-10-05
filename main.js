Webcam.set({
    width:300,
    height:300,
    image_format: 'png',
    image_quality:90
});

camera = document.getElementById("camera");
Webcam.attach(' #camera ');

function take_snapshort(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>'
    })
}

console.log('ml5 version :', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/dkzFUdKVR/model.json',modelLoaded);

function modelLoaded(){
    console.log("model loaded!");
}

function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}


function gotResult(error,results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        document.getElementById('rez_rezult').innerHTML=results[0].label;
        document.getElementById('acu_result').innerHTML=results[0].confidence.toFixed(3); 
    }
}