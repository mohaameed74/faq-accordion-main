let imgOne = document.querySelector('.img-1');
let pOne = document.querySelector('.p-1');

let imgTwo = document.querySelector('.img-2');
let pTwo = document.querySelector('.p-2');

let imgThree = document.querySelector('.img-3');
let pThree = document.querySelector('.p-3');

let imgFour = document.querySelector('.img-4');
let pFour = document.querySelector('.p-4');






imgOne.addEventListener('click', function() {

    imgOne.classList.toggle('active');

    if (imgOne.classList.contains('active')) {
        imgOne.src = "assets/images/icon-minus.svg"
        pOne.style.display = "none";
    } else {
        imgOne.src = "assets/images/icon-plus.svg"
        pOne.style.display = "block";
    }
})
imgTwo.addEventListener('click', function() {

    imgTwo.classList.toggle('active');

    if (imgTwo.classList.contains('active')) {
        imgTwo.src = "assets/images/icon-minus.svg"
        pTwo.style.display = "none";
    } else {
        imgTwo.src = "assets/images/icon-plus.svg"
        pTwo.style.display = "block";
    }
})
imgThree.addEventListener('click', function() {

    imgThree.classList.toggle('active');

    if (imgThree.classList.contains('active')) {
        imgThree.src = "assets/images/icon-minus.svg"
        pThree.style.display = "none";
    } else {
        imgThree.src = "assets/images/icon-plus.svg"
        pThree.style.display = "block";
    }
})
imgFour.addEventListener('click', function() {

    imgFour.classList.toggle('active');

    if (imgFour.classList.contains('active')) {
        imgFour.src = "assets/images/icon-minus.svg"
        pFour.style.display = "none";
    } else {
        imgFour.src = "assets/images/icon-plus.svg"
        pFour.style.display = "block";
    }
})