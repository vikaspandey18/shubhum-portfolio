import { Component, signal } from '@angular/core';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { Footer } from '../../shared/footer/footer';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  imports: [Sidebar, Footer, CarouselModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  customOptions: OwlOptions = {
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
  };
  slidesStore = signal<any[]>([
    {
      id: '1',
      src: '/images/author.jpg',
      alt: 'Slide 1 HM',
      dotContent: 'text1',
    },
    {
      id: '2',
      src: '/images/author-2.jpg',
      alt: 'Slide 2 HM',
      dotContent: 'text2',
    },
  ]);
}
