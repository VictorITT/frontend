import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../service/user-info.service';
import { UserInfo } from '../model/user-info';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class  UserInfoComponent implements OnInit {

  phone:number = null;
  addressLine:string = '';
  city:string = '';
  username: string;
  state:string = '';
  postalCode:number = null;
  country:string = '';
  isLogged = false;


  constructor(
    private userInfoService: UserInfoService,
    private tokenService: TokenService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.username = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.username = '';
    }
    
    this.userInfoService.get(this.username).subscribe(
      data => {
        this.phone = data.phone;
        this.addressLine = data.addressLine;
        this.city = data.city;
        this.country= data.country;
        this.state = data.state;
        this.postalCode = data.postalCode;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  onUpdate(): void {
    const userInfo = new UserInfo(this.phone, this.addressLine, this.city, this.state, this.postalCode, this.country);
    this.userInfoService.update(this.username,userInfo).subscribe(
      data => {
        this.toastr.success('Product Created', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  back(): void {
    window.location.href = "http://localhost:4200";
  }
}