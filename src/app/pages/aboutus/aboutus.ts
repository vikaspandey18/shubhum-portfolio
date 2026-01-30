import { Component } from '@angular/core';
import { Footer } from '../../shared/footer/footer';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-aboutus',
  imports: [Footer, Sidebar],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.scss',
})
export class Aboutus {}
