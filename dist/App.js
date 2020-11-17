const lightbox = document.querySelector('.image-lightbox');
const image = document.querySelector('.image');
const lightbox_img = document.createElement('img');
const background = document.querySelector('.background');
const slide_img = document.querySelector('.slide-image');

const imgArr = slide_img.children;

imgArr[0].classList.add('show');

const imgClick = img => {
    lightbox_img.src = img.src;
    image.appendChild(lightbox_img);
    lightbox.classList.add('show');
}

background.addEventListener('click', function() {
    lightbox.classList.remove('show');
});

let cnt = 0;

const slideLeft = () => {
    for(let i=0; i<imgArr.length; i++) {
        imgArr[i].classList.remove('show');
    }

    if(cnt == 0) {
        cnt = 12;
        imgArr[cnt].classList.add('show');
    } else {
        cnt--;
        imgArr[cnt].classList.add('show');
    }
}

const slideRight = () => {
    for(let i=0; i<imgArr.length; i++) {
        imgArr[i].classList.remove('show');
    }

    if(cnt < 12) {
        cnt++;
        imgArr[cnt].classList.add('show');
    } else {
        cnt = 0;
        imgArr[cnt].classList.add('show');
    }
}

