// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".nav-1",{
//     x:2000,
//     opacity:0,
//     delay:1,
//     duration:2

// })

function pageAnimation(){
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
   
    
    var tl= gsap.timeline()


    tl.from(".nav-1,.nav-2 h4, .btn-1", {
        y: -30,
        opacity: 0,
        duration:1,
        delay:0.4,
        stagger:0.2,
        
        
    });

    tl.from(".body-1 h1", {
        x:-90,
        opacity: 0,
        duration:1,
        delay:0.2,
       
        
        
    });



    tl.from(".body-1 p",
        {
            x:-90,
            opacity: 0,
            duration:1,
            delay:0.1,
        }
    )
    tl.from(".body-2  ",{
        opacity:0,
        duration:1,
        delay:0.5,
        x:200,
    },"-=1")

    tl.from(".body-1 button ",{
        x:-90,
        opacity:0,
        duration:1,
        delay:0.1
    })



});
}
 pageAnimation()


 


document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section1bottom",
            start: "top 50%",
            markers: true,
            scroller:"body",
            end:"top -10",
            scrub:2,
        }
    });

    tl.from(".section1bottom img", {
        x: -100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1
    });
     
    tl.from(".services h3",
        {
            x:-30,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1

        }
    );

    tl.from(".services p",
    {
        x:-30,
        opacity: 0,
        duration:0.5,
        stagger:0.1

    })
    tl.from(".elem.line1.left",
        {
            x:-300,
            opacity:0,
            duration:3,

          

        },"anime")


    tl.from(".elem.line1.right",
    {
        x:300,
        opacity:0,
        duration:3,
       


      

    },"anime")   
 tl.from(".elem.line2.left",
{
    x:-300,
    opacity:0,
    duration:3,



  

},"ok")   
 tl.from(".elem.line2.right",
{
    x:300,
    opacity:0,
    duration:3,


  

},"ok")






});
