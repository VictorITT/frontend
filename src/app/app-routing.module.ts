import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductComponent } from './product/list-product.component';
import { DetailProductComponent } from './product/detail-product.component';
import { NewProductComponent } from './product/new-product.component';
import { EditProductComponent } from './product/edit-product.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { ProdGuardService as guard } from './guards/prod-guard.service';
import { UserInfoComponent } from './auth/user-info.component';



const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userinfo', component: UserInfoComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'list', component: ListProductComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'detail/:id', component: DetailProductComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'new', component: NewProductComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'edit/:id', component: EditProductComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
