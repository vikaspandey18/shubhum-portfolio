import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-services',
  imports: [Header, Sidebar, Footer],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {

}
