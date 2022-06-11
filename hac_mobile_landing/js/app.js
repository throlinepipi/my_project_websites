//nav toggle - select button and links
const navToggle = document.querySelector("#navToggle");
const nav = document.querySelector("#nav-links");
//add event listener
navToggle.addEventListener("click",()=> {
    nav.classList.toggle('nav-open');
})

//Statistics
const counters = document.querySelectorAll('.count');
const speed = 200;

counters.forEach((counter) => {
    const updateCount = () => {
        const target = parseInt(+counter.getAttribute("data-target"));
        const count = parseInt(+counter.innerText);
        const increment = Math.trunc(target / speed);
        console.log(increment);

        if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 1);
        } else {
            count.innerText = target;
        }
    };
    updateCount();
});