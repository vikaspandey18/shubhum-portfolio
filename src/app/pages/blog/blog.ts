import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-blog',
  imports: [Header, Footer, Sidebar],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {}
