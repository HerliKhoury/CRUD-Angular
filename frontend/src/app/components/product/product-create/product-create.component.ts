import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null!
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private headerService: HeaderService
    ) {
      headerService.headerData = {
        title:'Insert new weapon',
        icon:'security',
        routeUrl:'products/create'
      }
     }

  ngOnInit(): void {
    
  }

  createProduct(): void{
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Weapon created successfully')
      this.router.navigate(['/products'])
    })
    
  }
  cancel(): void{
    this.router.navigate(['/products'])
  }

}
