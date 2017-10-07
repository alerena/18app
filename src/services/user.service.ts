import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {User} from '../models/user';
@Injectable()
export class UserService {
    private data: any;

  constructor(private http: Http) {

  }
  
  retrieveUser() {
    return new Promise((resolve, reject) => {
      this.http.get('../../assets/mock/user.json').subscribe(data => {
        let u = User.create(JSON.parse(data['_body']));
        resolve(u);
      });
    })
  }

}