import { msDur } from './animation-duration';
import breakpoints from './breakpoints';

import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';

export class ScreensSlider {
  constructor(element) {
    this.El = element;
  }

  init() {
    const swiperEl = this.El.querySelector('.swiper');
    const swiperPaginationEl = this.El.querySelector('.swiper-pagination');
    const swiperPrevButtonEl = this.El.querySelector('.swiper-button-prev');
    const swiperNextButtonEl = this.El.querySelector('.swiper-button-next');

    this.swiper = new Swiper(swiperEl, {
      modules: [Pagination, Navigation],
      slidesPerView: 1,
      touchStartPreventDefault: false,
      autoHeight: true,
      speed: msDur[3],
      pagination: {
        el: swiperPaginationEl,
        type: 'fraction'
      },
      navigation: {
        prevEl: swiperPrevButtonEl,
        nextEl: swiperNextButtonEl
      },
      breakpoints: {
        [breakpoints.md]: {
          slidesPerView: 2
        }
      }
    });
  }
}