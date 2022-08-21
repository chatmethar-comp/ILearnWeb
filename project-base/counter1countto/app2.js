const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.innerText = '0';
    // console.log(target);
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increase = target / 250;
        if (current < target) {
            counter.innerText = `${current + increase}`;
            setTimeout(updateCounter, 1);
        }
    }
    updateCounter();
});