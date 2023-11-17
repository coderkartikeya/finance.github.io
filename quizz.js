document.addEventListener("DOMContentLoaded", function () {
    const ele = document.getElementById('mb');
    const ele2 = document.getElementById('cr');

    ele2.addEventListener('click', function () {
        const element = document.getElementById('side');
        if (element) {
            element.style.visibility = 'hidden';
        }
        if (ele2) {
            ele2.style.visibility = 'hidden';
        }
    });

    ele.addEventListener('click', function () {
        const element = document.getElementById('side');
        if (element) {
            element.style.visibility = 'visible';
        }
        const element2 = document.getElementById('cross');
        if (element2) {
            element2.style.visibility = 'visible';
        }
    });
});
