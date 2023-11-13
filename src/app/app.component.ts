import { Component } from '@angular/core';

//Api service
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-website';

  constructor(private apiService: ApiService) {}

  categoryValue: any;
  dhoklaCategory: any;
  sweetCategory: any;
  namkeenCategory: any;
  snackCategory: any;
  khakhraCategory: any;
  ngOnInit() {
    // this.apiService.getCategory().then((data) => {
    //   console.log(data);
    //   this.categoryValue = data;
    // })

    this.apiService.subCategory().then((data: any[]) => {
      this.dhoklaCategory = data.filter((id: { parent_id: number; }) => id.parent_id == 1);
    })

    this.apiService.subCategory().then((data: any[]) => {
      this.sweetCategory = data.filter((id: { parent_id: number; }) => id.parent_id == 2);
    })

    this.apiService.subCategory().then((data: any[]) => {
      this.namkeenCategory = data.filter((id: { parent_id: number; }) => id.parent_id == 3);
    })

    this.apiService.subCategory().then((data: any[]) => {
      this.snackCategory = data.filter((id: { parent_id: number; }) => id.parent_id == 4);
    })

    this.apiService.subCategory().then((data: any[]) => {
      this.khakhraCategory = data.filter((id: { parent_id: number; }) => id.parent_id == 5);
    })
  }


  // category: object = {
  //   "tag" : "category"
  // };

  // ngOnInit() {
  //   //Fetch main category
  //   this.apiService.mainCategory(this.category).subscribe((data : any) => {
  //     console.log(data);
  //   })
  // }

  // api(){
  //   this.apiService.mainCategory(this.category).subscribe((data : any) => {
  //     console.log(data);
  //   })
  // }
}
