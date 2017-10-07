export class Merchant {
    
      private _id: number;
      private _name: string;
      private _types : string[];
      private _distance: string;
    
      constructor(id: number, name: string, types: string[], distance: string) {
        this._id = id;
        this._name = name;
        this._types = types;
        this._distance = distance;
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
    
      public set types(types:string[]){
        this._types = types;
      }
    
      public get types(){
        return this._types;
      }
    
      public set distance(distance:string){
        this._distance = distance;
      }
    
      public get distance(){
        return this._distance;
      }
    
    }