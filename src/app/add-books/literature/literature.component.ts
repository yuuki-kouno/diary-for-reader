import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Scrollbar, A11y } from 'swiper/core';
SwiperCore.use([Navigation, Scrollbar, A11y]);
import { DatabaseNewReleaseService } from 'src/app/services/database-new-release.service';

@Component({
  selector: 'app-literature',
  templateUrl: './literature.component.html',
  styleUrls: ['./literature.component.scss'],
})
export class LiteratureComponent implements OnInit {
  releaseDatas = this.dbNewReleaseService.getLiteratureDatas();

  config = {
    slidesPerView: 3,
    spaceBetween: 30,
    initialSlide: 1,
    centeredSlides: true,
    speed: 300,
    navigation: {
      nextEl: '.navigation__literature--next',
      prevEl: '.navigation__literature--prev',
    },
    breakpoints: {
      446: {
        slidesPerView: 4,
        initialSlide: 2,
      },
      586: {
        slidesPerView: 5,
        initialSlide: 3,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: false,
      },
      780: {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: false,
      },
      920: {
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: false,
      },
      1060: {
        slidesPerView: 5,
        spaceBetween: 20,
        centeredSlides: false,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 20,
        centeredSlides: false,
      },
      1340: {
        slidesPerView: 7,
        spaceBetween: 20,
        centeredSlides: false,
      },
    },
    loop: true,
  };

  constructor(private dbNewReleaseService: DatabaseNewReleaseService) {}

  ngOnInit(): void {}
}
