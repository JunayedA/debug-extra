const images = [
    'img/img-1.jpeg',
    'img/img-2.jpeg',
    'img/img-3.jpeg',
    'img/img-4.jpeg',
    'img/img-5.jpeg',
    'img/img-6.jpeg',
    'img/img-7.jpeg',
    'img/img-8.jpeg',
    'img/img-9.jpeg',
    'img/img-10.jpeg'
];
let imgIndex = 0;
const imageElement = document.getElementById('slider-image');
setInterval(() =>{
    if(imgIndex>=images.length){
        imgIndex = 0;
    }
    const imageUrl = images[imgIndex];
    imageElement.setAttribute('src',imageUrl);
    imgIndex++;
},1000)