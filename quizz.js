document.addEventListener("DOMContentLoaded", function () {
    const ele = document.getElementById('mb');
    const ele2 = document.getElementById('cr');
    

    ele2.addEventListener('click', function () {
        const element = document.getElementById('side');
        const ele3=document.getElementById('left');
        
        if (element) {
            element.style.visibility = 'hidden';
        }
        if (ele2) {
            ele2.style.visibility = 'hidden';
        }
        if(ele3){
            ele3.style.visibility='visible';
        }
        
    });

    ele.addEventListener('click', function () {
        const element = document.getElementById('side');
        const ele3=document.getElementById('left');
        if (element) {
            element.style.visibility = 'visible';
        }
        const element2 = document.getElementById('cross');
        if (element2) {
            element2.style.visibility = 'visible';
        }
        if(ele3){
            ele3.style.visibility='hidden';
        }
    });
});
