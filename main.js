const slideList = [{
    img: 'images/img1.jpg',
    text: 'Pierwszy Tekst'
}, 
{
    img: 'images/img2.jpg',
    text: 'Drugi tekst',
}, 
{
    img: 'images/img3.jpg',
    text: 'trzeci tekst',
}];

const image = document.querySelector('img.slider');
const text = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];


let slideIndex = 0;
let dotIndex = 0;
let time = 3000;

const changeDot = function(){
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[slideIndex].classList.add('active');
}

const changer = function(){
    slideIndex++;
    if(slideIndex === slideList.length){
        slideIndex = 0;
    }
    image.src = slideList[slideIndex].img;
    text.textContent = slideList[slideIndex].text;

    changeDot();
};
let slider = setInterval(changer, time);


const keyChangeSlide = function(e){
    if(e.keyCode == 37){
        clearInterval(slider);
        slideIndex--;
        if(slideIndex < 0){
            slideIndex = slideList.length -1; //Długość tablicy 3, max możliwy index 2 (bo 3 elementy w tablicy) więc -1 potrzebne
        }
    } else if(e.keyCode == 39){
        clearInterval(slider);
        slideIndex++;
        if(slideIndex == slideList.length){
            slideIndex = 0;
        }
    }
    image.src = slideList[slideIndex].img;
    text.textContent = slideList[slideIndex].text;
    changeDot();
    slider = setInterval(changer, time);

    
}


window.addEventListener('keydown', keyChangeSlide);