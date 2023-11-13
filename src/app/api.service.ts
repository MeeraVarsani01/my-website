import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient : HttpClient) { }

  // private apiURL =  "https://ittrainingrajkot.in/Dhokla_House/API/dhokala_house.php";

  // httpOptions = {
  //   headers : new HttpHeaders({
  //     'Content-Type' : 'application/json',
  //     // 'Access-Control-Allow-Origin':'*',
  //     // // 'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept, X-Custom-Header, Upgrade-Insecure-Requests',
  //     // 'Access-Control-Allow-Headers' : "*",
  //     // 'mode': 'no-cors'
  //   })
  // }

  // headers = new HttpHeaders({
  //   'Content-Type' : 'application/json'
  // })

  // //Fetch main category
  // public mainCategory(data : object): Observable<any> {
  //   console.log(data);
  //   // return this.httpClient.post<any>(this.apiURL, JSON.stringify(data), this.httpOptions);
  //   return this.httpClient.post<any>(this.apiURL, JSON.stringify(data), {headers: this.headers, responseType: "json", observe: "response"}).pipe(catchError((err) => {console.error(err);throw err;}));
  // }


  urlCategory = "http://localhost:3000/category";
  urlSubCategory = "http://localhost:3000/sub-category";
  urlProduct = "http://localhost:3000/product";

  async getCategory() {
    const data = await fetch(this.urlCategory);
    return await data.json() ?? [];
  }

  async subCategory() {
    const data = await fetch(this.urlSubCategory);
    return await data.json() ?? [];
  }

  async product() {
    const data = await fetch(this.urlProduct);
    return await data.json() ?? {};
  }

}

// chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
//json-server --watch db.json