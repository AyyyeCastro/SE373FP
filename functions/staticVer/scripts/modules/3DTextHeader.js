
import { Application } from "https://cdn.skypack.dev/@splinetool/runtime";

const kirbyTextCanvas = document.getElementById('kirbyTextCanvas');
const kirbyTextApp = new Application(kirbyTextCanvas);
kirbyTextApp.load('https://prod.spline.design/eYLgTQKZtcEOjReL/scene.splinecode');
