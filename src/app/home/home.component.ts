import { Component } from '@angular/core';
//Api service
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private apiService: ApiService) {}

  value: any;
  ngOnInit() {
    this.apiService.getCategory().then((data) => {
      console.log(data);
      this.value = data;
    })
  }
}
