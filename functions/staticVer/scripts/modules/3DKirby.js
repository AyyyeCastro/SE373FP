import { Application } from "https://cdn.skypack.dev/@splinetool/runtime";

// Get the loading screen element
const loadingScreen = document.getElementById("load");

// Array to hold all the model loading promises
let modelPromises = [];

const canvas = document.getElementById("kirbyModeCanvas");
const app = new Application(canvas);

// Push the model loading promise into the array
modelPromises.push(app.load("https://prod.spline.design/Srv2mLsM7RXLVrSo/scene.splinecode"));



// Wait for all models to load
Promise.all(modelPromises).then(() => {
  setTimeout(() => {
    // Hide the loading screen
    loadingScreen.style.display = "none";


      const Group = app.findObjectByName("Kirby");

      gsap.set(Group.scale, { x: 4, y: 4, z: 4 });
      gsap.set(Group.position, { x: 0, y: 0 });

      let rotateGroup = gsap.to(Group.rotation, {
        y: "+=360", // Rotate fully once
        x: 0,
        z: 0,
        duration: 600,
        repeat: -1,
        ease: "none",
        paused: true // Start the animation in paused state
      });

    /* the logic will be re-used consitently, so understand it from part1 and good from there on. */
    // Add a ScrollTrigger for #part1
      gsap.timeline({
        scrollTrigger: {
          trigger: "#part1",
          start: "top 60%",
          end: "bottom center",
          scrub: true,
          onEnter: () => rotateGroup.resume(), // Resume the animation when entering #part1
          onLeave: () => rotateGroup.pause(), // Pause the animation when leaving #part1
          onEnterBack: () => rotateGroup.resume(), // Resume the animation when scrolling back into #part1
          onLeaveBack: () => rotateGroup.pause() // Pause the animation when scrolling past the top of #part1
        }
      });

    // Add a ScrollTrigger for #part2
      gsap.timeline({
        scrollTrigger: {
          trigger: "#part2",
          start: "top 60%",
          end: "bottom bottom",
          scrub: true,
          onEnter: () => rotateEndGroup.pause() // Pause the rotateEndGroup animation when entering #part2
        }
      })
      .to(Group.rotation, { y: Math.PI / 4, duration: 1 }) // Rotate 25% to the right
      .to(Group.position, { x: -1500, y: -200 }, 0) 
      .to(Group.scale, { x: 3, y: 3, z: 3 }, 0);
      

      // Add a ScrollTrigger for #part3
      gsap.timeline({
        scrollTrigger: {
          trigger: "#part3",
          start: "top bottom",
          end: "center bottom",
          scrub: true
        }
      })
      .to(Group.rotation, { y: -Math.PI / 4, duration: 1 }) // Rotate 25% to the left
      .to(Group.position, { x: 1500, y: 50 }, 0) 
      .to(Group.scale, { x: 2.5, y: 2.5, z: 2.5 }, 0);

    // Add a ScrollTrigger for #part4
      gsap.timeline({
        scrollTrigger: {
          trigger: "#part4",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true
        }
      })
      .to(Group.rotation, { y: 0, duration: 1 }) 
      .to(Group.position, { x: 0, y: 0 }, 0) 
      .to(Group.scale, { x: 1, y: 1, z: 1 }, 0); 


    // Add a ScrollTrigger(s) for #customFooter
      gsap.timeline({
        scrollTrigger: {
          trigger: "#customFooter",
          start: "top 91%",
          end: "bottom bottom",
          scrub: true
        }
      })
      .to(Group.rotation, { y: 0, duration: 1 }) 
      .to(Group.position, { x: 0, y: 0 }, 0) 
      .to(Group.scale, { x: 2.5, y: 2.5, z: 2.5 }, 0); 

      gsap.timeline({
        scrollTrigger: {
          trigger: "#customFooter",
          start: "top 70%",
          end: "bottom bottom",
          scrub: true
        }
      })
      .to(Group.rotation, { y: 0, duration: 1 }) 
      .to(Group.position, { x: 0, y: -1250 }, 0) 
      .to(Group.scale, { x: 3, y: 3, z: 3 }, 0); 

      let rotateEndGroup = gsap.to(Group.rotation, {
    y: "+=360", 
    x: 0,
    z: 0,
    duration: 60,
    ease: "none",
    paused: true, 
    onComplete: () => {
        rotateEndGroup.pause();
    }
    });

    // Add a ScrollTrigger for #CustomerFooter
    gsap.timeline({
    scrollTrigger: {
        trigger: "#customFooter",
        start: "top 70%",
        scrub: true,
        onEnter: () => rotateEndGroup.resume(), 
        onLeave: () => rotateEndGroup.pause(), 
        onEnterBack: () => rotateEndGroup.resume(), 
        onLeaveBack: () => rotateEndGroup.pause() 
    }
    });

    console.log('Models are loading. Will take about 10 seconds.');
  }, 10000);
});

