import { Component } from '@angular/core';
import { ApiService } from '../api.service'; 

@Component({
  selector: 'app-khakhra',
  templateUrl: './khakhra.component.html',
  styleUrls: ['./khakhra.component.scss']
})
export class KhakhraComponent {
  constructor(private apiService: ApiService) {}

  value: any;
  ngOnInit() {
    this.apiService.subCategory().then((data: any[]) => {
      this.value = data.filter((id: { parent_id: number; }) => id.parent_id == 5);
    })
  }
}
