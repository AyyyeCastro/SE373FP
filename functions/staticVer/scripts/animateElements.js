// Create the ScrollTrigger for the first video
let triggerVideoFeature1 = ScrollTrigger.create({
  trigger: "#part2Row2ColRight",
  start: "top 85%",
  end: "bottom bottom", //when bottom hits top of vp
  onEnter: () => {
    // Animate the first video
    gsap.fromTo(
      ".part2ColRightKirbyVideo",
      {
        scale: 0, // 0 scale ensures it zooms IN, not OUT. (starts smaller)
        opacity: 0, // 0 opacity just ensures it's truly invisible before the animation triggers.
      },
      {
        scale: 1, // transforms into it's intended scale from 0. Aka zooming IN.
        opacity: 1, // End at opacity 1 (visible)
        duration: 1.6,
        ease: "power3.outIn",
      }
    );
  },
});

// Create the ScrollTrigger for the second video
let triggerVideoFeature2 = ScrollTrigger.create({
  trigger: "#part3Row2ColLeft",
  start: "top 85%",
  end: "bottom bottom", //when bottom hits top of vp
  onEnter: () => {
    gsap.fromTo(
      ".part3ColLeftKirbyVideo",
      {
        scale: 0, // 0 scale ensures it zooms IN, not OUT. (starts smaller)
        opacity: 0, // 0 opacity just ensures it's truly invisible before the animation triggers.
      },
      {
        scale: 1, // transforms into it's intended scale from 0. Aka zooming IN.
        opacity: 1, // End at opacity 1 (visible)
        duration: 1.6,
        ease: "power3.outIn",
      }
    );
  },
});

let triggerKirbyInfo = ScrollTrigger.create({
  trigger: "#part3Row3",
  start: "top 70%",
  end: "bottom bottom", //when bottom hits top of vp
  onEnter: () => {
    gsap.fromTo(
      "#part3Row3ColLeftCustomContainerInfo",
      {
        scale: 0, // 0 scale ensures it zooms IN, not OUT. (starts smaller)
        opacity: 0, // 0 opacity just ensures it's truly invisible before the animation triggers.
      },
      {
        scale: 1, // transforms into it's intended scale from 0. Aka zooming IN.
        opacity: 1, // End at opacity 1 (visible)
        duration: 1.2,
        ease: "power3.outIn",
      }
    );
  },
});

let triggerVideoFeature3 = ScrollTrigger.create({
  trigger: "#part4Row1ColLeft",
  start: "top 70%",
  end: "bottom bottom", //when bottom hits top of vp
  onEnter: () => {
    gsap.fromTo(
      ".part4ColLeftKirbyVideo",
      {
        scale: 0, // 0 scale ensures it zooms IN, not OUT. (starts smaller)
        opacity: 0, // 0 opacity just ensures it's truly invisible before the animation triggers.
      },
      {
        scale: 1, // transforms into it's intended scale from 0. Aka zooming IN.
        opacity: 1, // End at opacity 1 (visible)
        duration: 1.6,
        ease: "power3.outIn",
      }
    );
  },
});

// Create the ScrollTrigger for the third video
let triggerKirbyStars = ScrollTrigger.create({
  trigger: "#part4Row1ColLeft",
  start: "top 70%",
  end: "bottom bottom", //when bottom hits top of vp
  onEnter: () => {
    gsap.fromTo(
      "#featureParent",
      {
        x: window.innerWidth,
        opacity: 0, // 0 opacity just ensures it's truly invisible before the animation triggers.
      },
      {
        x: 0, // Slide in left
        opacity: 1,
        duration: 1.6,
        ease: "power3.outIn",
      }
    );
  },
});
