import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()

export class BuoniService {
    private data: any;

  constructor(private http: Http) {

  }
  retrieveData() {
    return new Promise((resolve, reject) => {
      this.http.get('../../assets/mock/coupon.json').subscribe(data => {
       // console.log(data["_body"]);
        resolve(data["_body"]);
      });
    })
  }

  getCategory() {
    return new Promise((resolve, reject) => {
      this.http.get('../../assets/mock/buono_category.json').subscribe(data => {
        resolve(data["_body"]);
      });
    })
  }

  getData() {
    console.log(this.data);
    return this.data;
  }
}