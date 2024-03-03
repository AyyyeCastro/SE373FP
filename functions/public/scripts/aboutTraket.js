    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const advContainer = document.querySelector(".advContainer");
    const pageGroups = gsap.utils.toArray(".pageGroup");
    const texts = gsap.utils.toArray(".anim");
    const mask = document.querySelector(".mask");

    let scrollTween = gsap.to(pageGroups, {
        xPercent: -100 * (pageGroups.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".advContainer",
            start: 'top top',
            pin: true,
            scrub: 1,
            end: "+=20500",
            snap: 1 / (pageGroups.length + 1),
        }
    });

    console.log(1 / (pageGroups.length - 1))

    //Progress bar animation

    gsap.to(mask, {
        width: "100%",
        scrollTrigger: {
            trigger: ".wrapper",
            start: "top left",
            scrub: 1
        }
    });

    // whizz around the pageGroups
    pageGroups.forEach((pageGroups) => {
        // grab the scoped text
        let text = pageGroups.querySelectorAll(".anim");

        // bump out if there's no items to animate
        if (text.length === 0) return

        // do a little stagger
        gsap.from(text, {
            y: -130,
            opacity: 0,
            duration: 2,
            ease: "elastic",
            stagger: 0.1,
            scrollTrigger: {
                trigger: pageGroups,
                containerAnimation: scrollTween,
                start: "left center",
            }
        });
    });