import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service'
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {id:0, name:'', price:0}

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService
    ) {
      headerService.headerData = {
        title:'Delete weapon',
        icon:'delete_forever',
        routeUrl:'products/delete/:id'
      } }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id!).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(): void{
    this.productService.delete(this.product!).subscribe(() => {
      this.productService.showMessage('Weapon deleted successfully')
      this.router.navigate(['/products'])
    })
    
  }
  cancel(): void{
    this.router.navigate(['/products'])
  }

}
