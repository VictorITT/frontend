import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  OrderURL = 'http://localhost:8080/order/';

  constructor(private httpClient: HttpClient) { }

  public save(order: Order): Observable<any> {
    return this.httpClient.post<any>(this.OrderURL + 'create', order);
  }


}
