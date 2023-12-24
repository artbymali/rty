const scrollers = document.querySelectorAll(".Scroller__container");

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((Scroller) => {
        Scroller.setAttribute("data-animated", true);
        
         const scrollerInner = scroller.querySelectorAll(".Scroller__inner");
         const scrollercontent = Array.from(scrollerInner.children);

         scrollercontent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            console.log(duplicatedItem);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
         })
    })
}