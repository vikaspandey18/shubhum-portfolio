import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-collection',
  imports: [Header, Sidebar, Footer],
  templateUrl: './collection.html',
  styleUrl: './collection.scss',
})
export class Collection {}
