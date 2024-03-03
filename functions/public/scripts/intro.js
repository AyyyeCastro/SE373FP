    // For welcome text H1
    const welcomeH1 = new SplitType('#welcomeH1');
    const welcomeH1Chars = welcomeH1.chars; 
    const welcomeH1Animation = gsap.to(welcomeH1Chars, {
        y: 0,
        stagger: 0.05,
        delay: 0.3,
        duration: .1
    }) // GSAP.to is the animation

    const welcomeH2 = new SplitType('#welcomeH2'); 
    const welcomeH2Chars = welcomeH2.chars; 
    const welcomeH2Animation = gsap.to(welcomeH2Chars, { 
        y: 0,
        stagger: 0.01,
        delay: 0.1,
        duration: .1,
        scrollTrigger: { 
            trigger: "#parentContainer",
            start: "top 100%",
            markers: true
        }
    })

    const statementH1 = new SplitType('#statementH1'); 
    const statementH1Chars = statementH1.chars; 
    const statementH1Animation = gsap.to(statementH1Chars, { 
        y: 0,
        stagger: 0.01,
        delay: 0.2,
        duration: .1,
        scrollTrigger: { 
            trigger: "#secondParentContainer",
            start: "top 60%",
            markers: true
        }
    })

    const statement2H1 = new SplitType('#statement2H1'); 
    const statement2H1Chars = statement2H1.chars; 
    const statement2H1Animation = gsap.to(statement2H1Chars, { 
        y: 0,
        stagger: 0.01,
        delay: 0.5,
        duration: .1,
        scrollTrigger: { 
            trigger: "#secondParentContainer",
            start: "top 60%",
        }
    })


    const maleOTGImage = document.querySelector("#row2ImageMaleOTG");

    // Create animation timeline
    const wobbleAnimation = gsap.timeline({
        repeat: -1,
        yoyo: true
    });

    // Add wobble animation (adjust the values to get the desired effect)
    wobbleAnimation.to(maleOTGImage, {
        x: 3, // move 5 pixels to the right
        duration: 0.5, // animation duration
        ease: "power1.inOut", // easing function for smooth movement
    }).to(maleOTGImage, {
        x: -3, // move 5 pixels to the left
        duration: 0.5,
        ease: "power1.inOut",
    });
    // Play the animation
    wobbleAnimation.play();