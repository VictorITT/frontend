import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './product/list-product.component';
import { DetailProductComponent } from './product/detail-product.component';
import { NewProductComponent } from './product/new-product.component';
import { EditProductComponent } from './product/edit-product.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { IndexComponent } from './index/index.component';
import { UserInfoComponent } from './auth/user-info.component';



@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    DetailProductComponent,
    NewProductComponent,
    EditProductComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
