import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule} from  '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagesRoutingModule } from './pages-routing.module';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';

@NgModule({
  declarations: [


    NavbarComponent,
    BreadcrumbsComponent,
    FooterComponent,
    SidebarComponent







  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    HttpClientModule
  ]
})
export class PagesModule { }
