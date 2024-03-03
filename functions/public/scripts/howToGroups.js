    //////////////////////////////////////// ANIMATE THE ELEMENTS UNDER THE parentContainerHowTo ////////////////////////////////////////////////////////////////////////////////

    document.addEventListener('DOMContentLoaded', () => {

      const howToGroups = gsap.utils.toArray('.howToGroup');

      let howToscrollTween = gsap.to(howToGroups, {
          xPercent: -100 * (howToGroups.length - 1),
          ease: 'none',
          scrollTrigger: {
              trigger: '.parentContainerHowTo',
              pin: true,
              scrub: 0.5,
              snap: 1 / (howToGroups.length - 1),
              start: 'top top',
              end: 10100
          }
      })

      gsap.to('.fancyNav', {
          fontSize: '2.5rem',
          top: '4rem',
          scrollTrigger: {
              trigger: '.fancyNav',
              start: 'top top',
              end: 1500,
              scrub: 0.5,
          }
      })

      gsap.to('#blueLine', {
          height: '10rem',
          scrollTrigger: {
              trigger: '#blueLine',
              scrub: 0.5,
              start: 'center center',
              end: 2000,
          }
      })

      document.querySelectorAll('.character').forEach(el => {

          gsap.to(el.querySelector('.leftSideText'), {
              x: 0,
              y: 0,
              scrollTrigger: {
                  containerAnimation: howToscrollTween,
                  trigger: el.querySelector('.leftSideText'),
                  start: 'top bottom',
                  end: '+=1000',
                  scrub: 0.5,
              }
          })
          gsap.to(el.querySelector('.leftSideTextDigitalDepth'), {
              x: 0,
              y: 0,
              scrollTrigger: {
                  containerAnimation: howToscrollTween,
                  trigger: el.querySelector('.leftSideTextDigitalDepth'),
                  start: 'top bottom',
                  end: '+=1000',
                  scrub: 0.5,
              }
          })

          gsap.to(el.querySelector('.rightSideText'), {
              y: 0,
              ease: 'none',
              scrollTrigger: {
                  containerAnimation: howToscrollTween,
                  trigger: el.querySelector('.rightSideText'),
                  start: 'top bottom',
                  end: '+=20%',
                  scrub: 0.5,
              }
          })
          gsap.to(el.querySelector('.rightSideTextDigitalDepth'), {
              y: 0,
              ease: 'none',
              scrollTrigger: {
                  containerAnimation: howToscrollTween,
                  trigger: el.querySelector('.rightSideTextDigitalDepth'),
                  start: 'top bottom',
                  end: '+=20%',
                  scrub: 0.5,
              }
          })

          gsap.to(el.querySelector('.quickStatement'), {
              y: 0,
              ease: 'none',
              scrollTrigger: {
                  containerAnimation: howToscrollTween,
                  trigger: el.querySelector('.quickStatement'),
                  start: 'top bottom',
                  end: '+=10%',
                  scrub: 0.5,
              }
          })
          gsap.to(el.querySelector('.quickStatementDigitalDepth'), {
              y: 0,
              ease: 'none',
              scrollTrigger: {
                  containerAnimation: howToscrollTween,
                  trigger: el.querySelector('.quickStatementDigitalDepth'),
                  start: 'top bottom',
                  end: '+=10%',
                  scrub: 0.5,
              }
          })

          gsap.to(el.querySelector('.intentionallyEmpty'), {
              x: 0,
              ease: 'none',
              scrollTrigger: {
                  containerAnimation: howToscrollTween,
                  trigger: el.querySelector('.intentionallyEmpty'),
                  start: 'top bottom',
                  end: '+=' + window.innerWidth,
                  scrub: 0.5,
              }
          })
          gsap.to(el.querySelector('.intentionallyEmpty2'), {
              x: 0,
              ease: 'none',
              scrollTrigger: {
                  containerAnimation: howToscrollTween,
                  trigger: el.querySelector('.intentionallyEmpty2'),
                  start: 'top bottom',
                  end: '+=' + window.innerWidth,
                  scrub: 0.5,
              }
          })
          gsap.to(el.querySelector('.intentionallyEmpty3'), {
              x: 0,
              ease: 'none',
              scrollTrigger: {
                  containerAnimation: howToscrollTween,
                  trigger: el.querySelector('.intentionallyEmpty3'),
                  start: 'top bottom',
                  end: '+=' + window.innerWidth,
                  scrub: 0.5,
              }
          })

          gsap.to(el.querySelector('img'), {
              y: 0,
              ease: 'none',
              scrollTrigger: {
                  containerAnimation: howToscrollTween,
                  trigger: el.querySelector('img'),
                  start: 'top bottom',
                  end: '+=50%',
                  scrub: 0.5,
              }
          })

          gsap.to(el.querySelector('.howToGroupBigText'), {
              y: 0,
              ease: 'none',
              scrollTrigger: {
                  containerAnimation: howToscrollTween,
                  trigger: el.querySelector('.howToGroupBigText'),
                  start: 'top bottom',
                  end: '+=100%',
                  scrub: 0.5,
              }
          })

      })
  })