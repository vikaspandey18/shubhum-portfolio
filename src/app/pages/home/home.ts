import { Component } from '@angular/core';
import { Sidebar } from "../../shared/sidebar/sidebar";
import { Footer } from "../../shared/footer/footer";

@Component({
  selector: 'app-home',
  imports: [Sidebar, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
