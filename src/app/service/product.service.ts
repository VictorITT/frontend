import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ProductURL = 'http://localhost:8080/product/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.ProductURL + 'list');
  }

  public detail(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.ProductURL + `detail/${id}`);
  }

  public detailName(name: string): Observable<Product> {
    return this.httpClient.get<Product>(this.ProductURL + `detailname/${name}`);
  }

  public save(Product: Product): Observable<any> {
    return this.httpClient.post<any>(this.ProductURL + 'create', Product);
  }

  public update(id: number, Product: Product): Observable<any> {
    return this.httpClient.put<any>(this.ProductURL + `update/${id}`, Product);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.ProductURL + `delete/${id}`);
  }
}
