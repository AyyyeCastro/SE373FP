

  // background progress verticalBG
  animateverticalBG("#shareParent", "35%", "0%");
  animateverticalBG("#reviewsParent", "75%", "75%");
  animateverticalBG("#endPageParent", "100%", "100%");
  

  function animateverticalBG(triggerElement, onEnterWidth, onLeaveBackWidth) {
      gsap.to(".verticalBG", {
          scrollTrigger: {
              trigger: triggerElement,
              start: "top center",
              end: "bottom bottom",
              scrub: true,
              onEnter: () => {
                  gsap.to(".verticalBG", {
                      width: onEnterWidth,
                      duration: 0.2,
                      ease: "none"
                  });
              },
              onLeaveBack: () => {
                  gsap.to(".verticalBG", {
                      width: onLeaveBackWidth,
                      duration: 0.2,
                      ease: "none"
                  });
              }
          }
      });
  }


  // keyboard text effect
  const clickCharGroup = document.querySelectorAll(".clickCharGroup");

  function clickAnimation() {
      const randomizeChar = clickCharGroup[Math.floor(Math.random() * clickCharGroup.length)];

      randomizeChar.style.animation = "pressDown 0.2s ease-in-out";

      randomizeChar.onanimationend = () => {
          randomizeChar.style.animation = "";
          setTimeout(clickAnimation, 100 + Math.random() * 300);
      };
  }
  clickAnimation();


function animateCircle(triggerElement, onEnterWidth, onLeaveBackWidth) {
   gsap.to("#circleFIll", {
       scrollTrigger: {
           trigger: triggerElement,
           start: "top center",
           end: "bottom bottom",
           scrub: true,
           onEnter: () => {
               gsap.to("#circleFIll", {
                   width: onEnterWidth,
                   duration: 0.2,
                   ease: "none"
               });
           },
           onLeaveBack: () => {
               gsap.to("#circleFIll", {
                   width: onLeaveBackWidth,
                   duration: 0.2,
                   ease: "none"
               });
           }
       }
   });
}

animateCircle("#endPageParent", "35%", "0%");
animateCircle("#gpDownloadImage", "55%", "35%");
animateCircle("#circleFillParent", "100%", "65%");

