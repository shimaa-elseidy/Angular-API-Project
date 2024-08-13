import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';

@Component({
  standalone:true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(private _ProductsService:ProductsService){}
  @ViewChild('modalImage') modalImage!: ElementRef<HTMLImageElement>;
  productList:Products[] = [];  

  showImage(image: string) {
    if (this.modalImage) {
      this.modalImage.nativeElement.src = image;
    }
  }
  ngOnInit(): void {
      this._ProductsService.getProduct().subscribe({
        next:(res)=>{this.productList=res},
        error:(err)=>{console.log(err);
        }
      })
  }
}

