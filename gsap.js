gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const size = layer.getAttribute('data-size').split(',');

    // Set initial size
    layer.style.width = size[0] + 'px';
    layer.style.height = size[1] + 'px';

    gsap.to(layer, {
        y: (i, target) => (1 - speed) * (window.innerHeight + target.offsetHeight) / 2,
        opacity: 0, // Fade out effect
        scale: 0.5, // Shrink effect
        ease: 'none',
        scrollTrigger: {
            trigger: layer,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
});
 gsap.from(".about_heading", {
    scrollTrigger: {
        trigger: ".about_heading",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    },
    y: 50,
    opacity: 0,
    duration: 1
});

gsap.from(".about_content", {
    scrollTrigger: {
        trigger: ".about_content",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    },
    y: 50,
    opacity: 0,
    duration: 1
});

gsap.from(".skills ", {
    scrollTrigger: {
        trigger: ".skills",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2 
});