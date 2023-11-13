import { Component } from '@angular/core';
//ApiService
import { ApiService } from '../api.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-dhokla',
  templateUrl: './dhokla.component.html',
  styleUrls: ['./dhokla.component.scss']
})
export class DhoklaComponent {
  constructor(private apiService: ApiService) {}

  value: any;
  ngOnInit() {
    this.apiService.subCategory().then((data: any[]) => {
      this.value = data.filter((id: { parent_id: number; }) => id.parent_id == 1);
    })
  }
}
