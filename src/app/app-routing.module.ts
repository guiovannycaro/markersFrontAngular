import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { RolesComponent } from './pages/roles/roles.component';
import { PrestamoComponent } from './pages/prestamo/prestamo.component';
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




const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },

  { path: 'dashboard/roles', component: RolesComponent },
  { path: 'dashboard/prestamo', component: PrestamoComponent },
  { path: 'dashboard/solicitudes', component: SolicitudesComponent },
  { path: 'dashboard/tipodocumento', component: TipodocumentoComponent },
  { path: 'dashboard/tiposolicitud', component: TiposolicitudComponent },
  { path: 'dashboard/usuarios', component: UsuariosComponent },
  { path: 'dashboard/pais', component: PaisComponent },
  { path: 'dashboard/departamento', component: DepartamentoComponent },
  { path: 'dashboard/ciudad', component: CiudadComponent },
  { path: 'dashboard/solicitudusuario', component: SolicitudesusuarioComponent },

  { path: 'dashboard/gestionprestamos', component: GestionprestamosComponent },
  { path: 'dashboard/gestionsolicitudes', component: GestionsolicitudesComponent },


  { path: '**', component: NopageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
