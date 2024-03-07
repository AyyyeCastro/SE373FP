import { Application } from "https://cdn.skypack.dev/@splinetool/runtime";

// Get the loading screen element
const loadingScreen = document.getElementById("load");

// Array to hold all the model loading promises
let modelPromises = [];

const kirbyTextCanvas = document.getElementById('kirbyTextCanvas');
const kirbyTextApp = new Application(kirbyTextCanvas);
// Push the model loading promise into the array
modelPromises.push(kirbyTextApp.load('https://prod.spline.design/eYLgTQKZtcEOjReL/scene.splinecode'));


// Wait for all models to load
Promise.all(modelPromises).then(() => {
   setTimeout(() => {
      // Hide the loading screen
      loadingScreen.style.display = "none";


      // room for scroll triggers/etc go here.
      console.log('Models are loading. Will take about 10 seconds.');
   }, 10000);
});





