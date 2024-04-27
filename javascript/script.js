document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    gsap.to(".circle",  {
        x: mouseX, 
        y: mouseY,
        stagger: -0.1
    });

    // 遅延がないアニメーション
    gsap.set(".curson", {
        x: mouseX, 
        y: mouseY,
    });
});

