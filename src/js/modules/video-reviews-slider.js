import { msDur } from './animation-duration';
import breakpoints from './breakpoints';

import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';

export class VideoReviewsSlider {
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
        [breakpoints.sm]: {
          slidesPerView: 2
        },
        [breakpoints.md]: {
          slidesPerView: 3
        },
        [breakpoints.xl]: {
          slidesPerView: 4
        }
      }
    });
  }
}