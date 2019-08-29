let mobilenet;
let img;

function modelReady() {
  console.log('Model is ready!!!');
  mobilenet.predict(img, gotResults);
}

function gotResults(error, results) {
  if (error) {
    // console.log(error);
  } else {
    // console.log(results);
    let label = results[0].label;
    let prob = results[0].confidence;
    let percent = 100 * prob;
    document.getElementById("predicted").innerHTML ='Predicted Class ' + label+ ' with ' + percent.toFixed(2) + '% confidence level.';
  }
}

function setup() {
  img = createImg(document.getElementById('output').src);
  img.hide()
  mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}