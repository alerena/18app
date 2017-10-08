import {MerchantType} from './merchantType.model';

export class Merchant {
    
      private _id: number;
      private _name: string;
      private _type : MerchantType;
      private _distance: string;
      private _town: string;
      private _address: string;
      private _url: string
    
      constructor(id: number, name: string, type: MerchantType, distance: string, town: string, address: string, url:string) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._distance = distance;
        this._town = town;
        this._address = address; 
        this._url = url;
      }
    
      public set id(id: number) {
        this._id = id;
      }
    
      public get id(){
        return this._id;
      }
    
      public set name (name:string) {
        this._name = name;
      }
    
      public get name(){
      return this._name;
      }
    
      public set type(type:MerchantType){
        this._type = type;
      }
    
      public get type(){
        return this._type;
      }
    
      public set distance(distance:string){
        this._distance = distance;
      }
    
      public get distance(){
        return this._distance;
      }

      public set address(address:string){
        this._address = address;
      }
    
      public get address(){
        return this._address;
      }
    
      public set town(town:string){
        this._town = town;
      }
    
      public get town(){
        return this._town;
      }

      public set url(url:string){
        this._url = url;
      }
    
      public get url(){
        return this._url;
      }
    
    }