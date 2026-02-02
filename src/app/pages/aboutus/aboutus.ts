import { Component } from '@angular/core';
import { Footer } from '../../shared/footer/footer';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { CountUpDirective } from 'ngx-countup';

@Component({
  selector: 'app-aboutus',
  imports: [Footer, Sidebar, CountUpDirective],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.scss',
})
export class Aboutus {}
