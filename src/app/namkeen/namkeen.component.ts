import { Component } from '@angular/core';
//ApiService
import { ApiService } from '../api.service';

@Component({
  selector: 'app-namkeen',
  templateUrl: './namkeen.component.html',
  styleUrls: ['./namkeen.component.scss']
})
export class NamkeenComponent {
  constructor(private apiService: ApiService) {}

  value: any;
  ngOnInit() {
    this.apiService.subCategory().then((data: any[]) => {
      this.value = data.filter((id: { parent_id: number; }) => id.parent_id == 3);
    })
  }
}
