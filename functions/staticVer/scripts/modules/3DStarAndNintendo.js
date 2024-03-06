
import { Application } from "https://cdn.skypack.dev/@splinetool/runtime";
  const starCanvas = document.getElementById('starCanvas');
  const starApp = new Application(starCanvas);
  starApp.load('https://prod.spline.design/vsOkDyFrbJ8vRWGv/scene.splinecode')

  const starCanvas2 = document.getElementById('starCanvas2');
  const starApp2 = new Application(starCanvas2);
  starApp2
  .load("https://prod.spline.design/rveDnJ6N6rlsRlGf/scene.splinecode")
  .then(() => {
    const Group = starApp2.findObjectByName("star");

    gsap.set(Group.scale, { x: 1, y: 1, z: 1 });
    gsap.set(Group.position, { x: 0, y: 0 });

    let rotateGroup = gsap.to(Group.rotation, {
      y: "+=360", 
      x: 0,
      z: 0,
      duration: 600,  
      repeat: -1,
      ease: "none",
      paused: true 
    });

  // Add a ScrollTrigger for #part2
    gsap.timeline({
      scrollTrigger: {
        trigger: "#part2",
        start: "top 100%",
        end: "bottom bottom",
        scrub: true,
        onEnter: () => rotateGroup.resume(),
        onLeave: () => rotateGroup.pause(),
        onEnterBack: () => rotateGroup.resume(), 
        onLeaveBack: () => rotateGroup.pause() 
      }
    });
  })