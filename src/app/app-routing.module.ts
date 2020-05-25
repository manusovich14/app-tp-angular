import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Newpunto1Component} from './components/newpunto1/newpunto1.component';
import { Punto2Component} from './components/punto2/punto2.component';
import { Punto3Component} from './components/punto3/punto3.component';
import { Punto4Component} from './components/punto4/punto4.component';



const routes: Routes = [
  {path: 'newpunto1', component: Newpunto1Component},
  {path: 'punto2', component: Punto2Component},
  {path: 'punto3', component: Punto3Component},
  {path: 'punto4', component: Punto4Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
