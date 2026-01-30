import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Aboutus } from './pages/aboutus/aboutus';
import { Contact } from './pages/contact/contact';
import { Services } from './pages/services/services';
import { Blog } from './pages/blog/blog';
import { Collection } from './pages/collection/collection';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Shubham Portfolio',
    children: [
      {
        path: 'about',
        component: Aboutus,
        title: 'About',
      },
      {
        path: 'contact',
        component: Contact,
        title: 'Contact',
      },
      {
        path: 'services',
        component: Services,
        title: 'Services',
      },
      {
        path: 'blog',
        component: Blog,
        title: 'Blog',
      },
      {
        path: 'collection',
        component: Collection,
        title: 'Collection',
      },
    ],
  },
];
