const brandsList = document.querySelector('.section__content'),
    readMoreBtn = document.querySelector('.section__read-more-btn');

let swiper = null;

function showMore(event) {
    if (brandsList.classList.contains('brands--short')) {
        brandsList.classList.remove('brands--short');

        event.target.innerText = 'Скрыть';
        event.target.classList.add('read-more-btn--less');

        return;
    }

    brandsList.classList.add('brands--short');

    event.target.innerText = 'Показать все';
    event.target.classList.remove('read-more-btn--less');
}

function initSlider() {
    if (document.documentElement.clientWidth >= 768) {
        if (swiper) {
            swiper.destroy(true, true);
            swiper = null;
        }

        return;
    }

    if (swiper) return;

    swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });
}

readMoreBtn.addEventListener('click', showMore);
window.addEventListener('resize', initSlider);

initSlider();
