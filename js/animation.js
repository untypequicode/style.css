const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('as-n');
        } else {
            entry.target.classList.remove('as-n');
        }
    });
});

const hiddenElements = document.querySelectorAll('.ah-n');
hiddenElements.forEach((element) => {
    observer.observe(element);
});