import  {Merchant} from '../../models/merchant.model';
import {MerchantType} from '../../models/merchantType.model';
import {Injectable} from '@angular/core';

@Injectable()
export class MerchantsService {
    private merchants : Merchant[] = [];
    private types : MerchantType[] = [
        new MerchantType(1, 'Cinema'),
        new MerchantType(2, 'Concerti'),
        new MerchantType(3, 'Eventi Culturali'),
        new MerchantType(4, 'Libri'),
        new MerchantType(5, 'Musei, monumenti, parchi naturali'),
        new MerchantType(6, 'Teatro e Danza'),
    ]; 

    getMerchants(){
        
        this.merchants = [];
        for( let i = 0; i< 10; i++){
            let merchant = new Merchant(i, `Merchant - mock : ${i}`, this.types[(Math.floor(Math.random() * 6) )], `${i*100} m`, `Town - mock : ${i}`, `Address - mock : ----- ${i}`,
            `www.mockMerchant${i}.com`);
            this.merchants.push(merchant);
        }
        return this.merchants.slice();
    }


    getFilteredMerchants(filter){
        this.merchants = [];
        for( let i = 0; i< 10; i++){
            let merchant = new Merchant(i, `Merchant - mock : ${i}`, this.types[(Math.floor(Math.random() * 6) )], `${i*100} m`, `Town - mock : ${i}`, `Address - mock : ----- ${i}`,
            `www.mockMerchant${i}.com`);
            this.merchants.push(merchant);
        }
        return this.merchants.slice();
    }


}