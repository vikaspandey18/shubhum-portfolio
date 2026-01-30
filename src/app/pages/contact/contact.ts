import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-contact',
  imports: [Header, Sidebar, Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
