import  {Merchant} from '../../models/merchant.model';
import {Injectable} from '@angular/core';

@Injectable()
export class MerchantsService {
    private merchants : Merchant[] = [];
    
    getMerchants(){
        this.merchants = [];
        for( let i = 0; i< 10; i++){
            let merchant = new Merchant(i, `merchant - ${i}`, [], `${i*100} m`);
            this.merchants.push(merchant);
        }
        return this.merchants.slice();
    }




}