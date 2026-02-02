import { Component, AfterViewInit } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { Footer } from '../../shared/footer/footer';
import { CommonModule } from '@angular/common';

declare const $: any;

@Component({
  selector: 'app-collection',
  imports: [Header, Sidebar, Footer, CommonModule],
  templateUrl: './collection.html',
  styleUrl: './collection.scss',
})
export class Collection implements AfterViewInit {

  ngAfterViewInit() {
    $('#gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  }


  collectionList = [
    {
      id: 1,
      title: 'Photo 01',
      image: 'images/image_1.jpg',
      tag: 'Model',
    },
    {
      id: 2,
      title: 'Photo 02',
      image: 'images/image_2.jpg',
      tag: 'Nature',
    },
    {
      id: 3,
      title: 'Photo 03',
      image: 'images/image_3.jpg',
      tag: 'Fashion',
    },
    {
      id: 4,
      title: 'Photo 04',
      image: 'images/image_4.jpg',
      tag: 'Travel',
    },
    {
      id: 5,
      title: 'Photo 05',
      image: 'images/image_5.jpg',
      tag: 'Travel',
    },
    {
      id: 6,
      title: 'Photo 06',
      image: 'images/image_6.jpg',
      tag: 'Travel',
    },
    {
      id: 7,
      title: 'Photo 07',
      image: 'images/image_7.jpg',
      tag: 'Fashion, Model',
    },
    {
      id: 8,
      title: 'Photo 08',
      image: 'images/image_8.jpg',
      tag: 'Nature',
    },
    {
      id: 9,
      title: 'Photo 09',
      image: 'images/image_9.jpg',
      tag: 'Technology',
    },
    {
      id: 10,
      title: 'Photo 10',
      image: 'images/image_10.jpg',
      tag: 'Model',
    },
    {
      id: 11,
      title: 'Photo 11',
      image: 'images/image_11.jpg',
      tag: 'Fashion',
    },
    {
      id: 12,
      title: 'Photo 12',
      image: 'images/image_12.jpg',
      tag: 'Travel',
    },
  ];
}
