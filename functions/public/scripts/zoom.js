const zoom = document.querySelector('.zoom');

gsap.fromTo(zoom, {
    scale: 2.2
}, {
    scale: 1,
    scrollTrigger: {
        trigger: '.parentImgZoomBody',
        start: 'top top',
        end: () => "+=" + (document.querySelector('.wrap').offsetHeight - (window.innerHeight / 2)),
        scrub: true
    }
});