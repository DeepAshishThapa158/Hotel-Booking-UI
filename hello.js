let searchbtn = document.querySelector(".icons .fa-solid.fa-search");
let slidebox = document.querySelector('.slidebox');
let slidenav = document.querySelector('.slidenav');
let menubutton = document.querySelector('.fa-solid.fa-bars')
logincontainer = document.querySelector('.login-container');
searchbtn.addEventListener('click', () => {
    searchbtn.classList.toggle('fa-times');
    slidebox.classList.toggle('active');
    if (slidebox.classList.contains('active')) {
        slidenav.style.marginTop = '17vh';
    }
    else {
        slidenav.style.marginTop = '9vh';
    }
});
menubutton.addEventListener('click', () => {
    slidenav.classList.toggle('active2')
})
let cross = document.querySelector('#form-close');
cross.addEventListener('click', () => {

    logincontainer.style.top = '-120vh';
})
let person = document.querySelector('.fa-solid.fa-user');
person.addEventListener('click', () => {
    logincontainer.style.top = '0'
})

buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    dot1 = document.querySelector('#dot1');
    dot1.style.backgroundColor = 'orange';
    button.addEventListener('click', () => {

        videos = document.querySelectorAll('video');
        videos.forEach(video => {
            if (video.style.transform == 'translate(-100%)') {
                video.style.transform = 'translate(-200%)'
                dot3 = document.querySelector('#dot3');

                dot3.style.backgroundColor = 'orange'
                dot2.style.backgroundColor = 'white'
            }
            else if (video.style.transform == 'translate(-200%)') {
                video.style.transform = 'translate(0)'
                dot1.style.backgroundColor = 'orange';
                dot3.style.backgroundColor = 'white';
            }
            else {
                video.style.transform = 'translate(-100%)'
                dot2 = document.querySelector('#dot2');
                dot2.style.backgroundColor = 'orange';
                dot1.style.backgroundColor = 'white';

            }
        });
    })
})

picturegrp = document.querySelectorAll('.picture');

picturegrp.forEach((picture) => {
    picture.addEventListener('mouseover', () => {
        backbox = picture.querySelector('.backbox');
        backbox.style.height = '100%';
        iconshop = backbox.querySelector('.iconsshop');
        iconshop.style.display = 'inline'

    })
    picture.addEventListener('mouseleave', () => {
        backbox = picture.querySelector('.backbox');
        backbox.style.height = '0px'
        iconshop = backbox.querySelector('.iconsshop');
        iconshop.style.display = 'none';
    })
})

hillgrp = document.querySelectorAll('.hill');
hillgrp.forEach((hill) => {
    hill.addEventListener('mouseover', () => {
        blackbox = hill.querySelector('.blackbox');
        blackbox.style.height = '100%';
        boxcontent = blackbox.querySelector('.boxcontent');
        boxcontent.style.display = 'inline';


    })
    hill.addEventListener('mouseleave', () => {
        blackbox = hill.querySelector('.blackbox');
        blackbox.style.height = '0px';
        boxcontent = blackbox.querySelector('.boxcontent');
        boxcontent.style.display = 'none';



    })

})
// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     // direction: 'horizontal',
//     spaceBetween: 20,
//     loop: true,
//     autoplay: {
//         delay: 1000,
//         disableOnIneraction: false,
//     },
//     breakpoints: {
//         640: {
//             slidesPerView: 1,

//         },
//         768: {
//             slidesPerView: 2,
//         },
//         1024: {
//             slidesPerView: 3,
//         },
//     },

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },



// });
const swiper2 = new Swiper('.swiper', {
    // Optional parameters

    loop: true,
    autoplay: {
        delay: 1000,
        disableOnIneraction: false,
    },
    breakpoints: {

        640: {
            slidesPerView: 2,

        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    },


});