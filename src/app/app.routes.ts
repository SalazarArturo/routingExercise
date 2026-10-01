import { Routes } from '@angular/router';

import { HomeComponent } from './home-component/home-component'; // componentes que queremos routerar en la app
import { AboutComponent } from './about-component/about-component';
import { ContactComponent } from './contact-component/contact-component';
import { Products } from './products-components/products/products';
import { Product } from './products-components/product/product';

import { DeepAbout } from './about-component/deep-about/deep-about';

import { MyService } from './services/my-service';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent,
        children: [
            {
                path: 'deep',
                component: DeepAbout
            }
        ]
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'products', 
        component: Products,
        providers: [MyService],
        children: [
            {
                path: 'product/:id',
                component: Product
            }
        ]
    }
];
