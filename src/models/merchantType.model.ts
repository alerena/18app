export class MerchantType {
    
      private _id: number;
      private _value: string;

      public constructor ( id:number, value:string){
          this._id = id;
          this._value = value;
      }

      public set id(id: number) {
        this._id = id;
      }
    
      public get id(){
        return this._id;
      }

      public set value(value: string) {
        this._value = value;
      }
    
      public get value(){
        return this._value;
      }

}