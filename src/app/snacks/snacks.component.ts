import { Component } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.scss']
})
export class SnacksComponent {
  constructor(private apiService: ApiService) {}

  value: any;
  ngOnInit() {
    this.apiService.subCategory().then((data: any[]) => {
      this.value = data.filter((id: { parent_id: number; }) => id.parent_id == 4);
    })
  }
}
