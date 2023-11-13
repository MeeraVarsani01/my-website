import { Component } from '@angular/core';
//ApiService
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sweets',
  templateUrl: './sweets.component.html',
  styleUrls: ['./sweets.component.scss']
})
export class SweetsComponent {
  constructor(private apiService: ApiService) {}

  value: any;
  ngOnInit() {
    this.apiService.subCategory().then((data: any[]) => {
      this.value = data.filter((id: { parent_id: number; }) => id.parent_id == 2);
    })
  }
}
