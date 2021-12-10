import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Order } from '../model/order';
import { Product } from '../model/product';
import { OrderService } from '../service/order.service';
import { ProductService } from '../service/product.service';
import { TokenService } from '../service/token.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isLogged = false;
  username = '';
  products: Product[] = [];
  cartProducts: Product[] = [];
  roles: string[];
  isAdmin = false;
  total: number;
  order : Order;
  euro: boolean = false;

  constructor(private productService: ProductService,
    private orderService: OrderService,
    private toastr: ToastrService,
    private tokenService: TokenService
    ) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.username = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.username = '';
    }
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;      
    }

    this.loadProducts();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  loadProducts(): void {
    this.productService.list().subscribe(
      data => {
        this.products = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  buy(): void {
    this.order = new Order(new Date(),"Processing",this.cartProducts,this.username);
    this.orderService.save(this.order).subscribe(
      data => {
        this.toastr.success('Compra efectuada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        
      },
    );
    this.cartProducts = [];
  }
  
  
  addToCart(cartProducts:Product): void {
    this.cartProducts.push(cartProducts);
    this.totalCart();
    this.euro = true;
  }

  deleteFromCart(cartProducts:Product): void {
    this.cartProducts = this.cartProducts.filter(obj => obj !== cartProducts);
    this.totalCart();
  }

  totalCart() {
    this.total = 0;
    for(var i = 0; i < this.cartProducts.length; i++) {
      this.total = this.total + this.cartProducts[i].price;
    }
  }

  delete(id: number) {
    this.productService.delete(id).subscribe(
      data => {
        this.toastr.success('Product Deleted', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
          this.loadProducts();
        },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
}