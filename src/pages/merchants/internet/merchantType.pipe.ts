import { Pipe, PipeTransform } from '@angular/core';
import { MerchantType } from '../../../models/merchantType.model'
import {Merchant} from '../../../models/merchant.model'

@Pipe({
    name: 'merchantTypePipe',
    pure: false
})
export class MerchantTypePipe implements PipeTransform {
    transform(items: Merchant[], filter: number): any {
        if (!items || !filter || filter == 0) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.type.id == filter);
    }
}