import { Component } from '@angular/core';
//ApiService
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  id: any;
  value: any;

  constructor(private apiService : ApiService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

  ngOnInit(){
    console.log(this.id);
    this.apiService.product().then((data: any[]) => {
      this.value = data.filter((response: { id: number; }) => response.id == this.id);
      console.log(this.value);
    })
  }

}
