import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { AuthModule } from './auth/auth.module';
import { ReactiveFormsModule,FormsModule} from  '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RolesComponent } from './pages/roles/roles.component';
import { PrestamoComponent } from './pages/prestamo/prestamo.component';
import { AddciudadComponent } from './pages/ciudad/addciudad/addciudad.component';
import { EditciudadComponent } from './pages/ciudad/editciudad/editciudad.component';
import { EditdepartamentoComponent } from './pages/departamento/editdepartamento/editdepartamento.component';
import { AdddepartamentoComponent } from './pages/departamento/adddepartamento/adddepartamento.component';
import { AdddgestionprestamosComponent } from './pages/gestionprestamos/adddgestionprestamos/adddgestionprestamos.component';
import { EditgestionprestamosComponent } from './pages/gestionprestamos/editgestionprestamos/editgestionprestamos.component';
import { EditgestionsolicitudesComponent } from './pages/gestionsolicitudes/editgestionsolicitudes/editgestionsolicitudes.component';
import { AddgestionsolicitudesComponent } from './pages/gestionsolicitudes/addgestionsolicitudes/addgestionsolicitudes.component';
import { AddpaisComponent } from './pages/pais/addpais/addpais.component';
import { EditpaisComponent } from './pages/pais/editpais/editpais.component';
import { EditrolesComponent } from './pages/roles/editroles/editroles.component';
import { AddrolesComponent } from './pages/roles/addroles/addroles.component';
import { AddsolicitudesComponent } from './pages/solicitudes/addsolicitudes/addsolicitudes.component';
import { EditsolicitudesComponent } from './pages/solicitudes/editsolicitudes/editsolicitudes.component';
import { EditsolicitudesusuarioComponent } from './pages/solicitudesusuario/editsolicitudesusuario/editsolicitudesusuario.component';
import { AddsolicitudesusuarioComponent } from './pages/solicitudesusuario/addsolicitudesusuario/addsolicitudesusuario.component';
import { AddtipodocumentoComponent } from './pages/tipodocumento/addtipodocumento/addtipodocumento.component';
import { EdittipodocumentoComponent } from './pages/tipodocumento/edittipodocumento/edittipodocumento.component';
import { EdittiposolicitudComponent } from './pages/tiposolicitud/edittiposolicitud/edittiposolicitud.component';
import { AddtiposolicitudComponent } from './pages/tiposolicitud/addtiposolicitud/addtiposolicitud.component';
import { EditusuariosComponent } from './pages/usuarios/editusuarios/editusuarios.component';
import { AddusuariosComponent } from './pages/usuarios/addusuarios/addusuarios.component';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';
import { TipodocumentoComponent } from './pages/tipodocumento/tipodocumento.component';
import { TiposolicitudComponent } from './pages/tiposolicitud/tiposolicitud.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { PaisComponent } from './pages/pais/pais.component';
import { DepartamentoComponent } from './pages/departamento/departamento.component';
import { CiudadComponent } from './pages/ciudad/ciudad.component';
import { SolicitudesusuarioComponent } from './pages/solicitudesusuario/solicitudesusuario.component';
import { GestionprestamosComponent } from './pages/gestionprestamos/gestionprestamos.component';
import { GestionsolicitudesComponent } from './pages/gestionsolicitudes/gestionsolicitudes.component';
import { AddprestamoComponent } from './pages/prestamo/addprestamo/addprestamo.component';
import { EditprestamoComponent } from './pages/prestamo/editprestamo/editprestamo.component';



@NgModule({
  declarations: [
    AppComponent,
    NopageFoundComponent,

    NavbarComponent,
    BreadcrumbsComponent,
    FooterComponent,
    SidebarComponent,

    DashboardComponent,
    RolesComponent,
    PrestamoComponent,
    SolicitudesComponent,
    TipodocumentoComponent,
    TiposolicitudComponent,
    UsuariosComponent,
    PaisComponent,
    DepartamentoComponent,
    CiudadComponent,
    SolicitudesusuarioComponent,
    GestionprestamosComponent,
    GestionsolicitudesComponent,
    AddprestamoComponent,
    EditprestamoComponent,

    AddciudadComponent,
    EditciudadComponent,
    EditdepartamentoComponent,
    AdddepartamentoComponent,
    AdddgestionprestamosComponent,
    EditgestionprestamosComponent,
    EditgestionsolicitudesComponent,
    AddgestionsolicitudesComponent,
    AddpaisComponent,
    EditpaisComponent,
    EditrolesComponent,
    AddrolesComponent,
    AddsolicitudesComponent,
    EditsolicitudesComponent,
    EditsolicitudesusuarioComponent,
    AddsolicitudesusuarioComponent,
    AddtipodocumentoComponent,
    EdittipodocumentoComponent,
    EdittiposolicitudComponent,
    AddtiposolicitudComponent,
    EditusuariosComponent,
    AddusuariosComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    AuthModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
