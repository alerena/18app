export class Buoni {
    private _type: string;
    private _amount: string;
    private _description: string;
    private _status: string;
    
    constructor() {
    }

    public get type() : string {
        return this._type;
    }
    public set type(v : string) {
        this._type = v;
    }

     public get amount() : string {
        return this._amount;
    }
    public set amount(v : string) {
        this._amount = v;
    }  
    
    public get description() : string {
        return this._description;
    }
    public set description(v : string) {
        this._description = v;
    }  

    public get status(): string{
        return this._status;
    }
    public set status(v: string){
        this._status = v;
    }

    public toString(): string{
        return JSON.stringify(this);
    }

    public static create(data: any){
        let buoni = new Buoni();
        buoni.type = data._type;
        buoni.amount = data._amount;
        buoni.description = data._description;
        buoni.status = data._status;
        return buoni;
    }

    public static createBuoni(data: any){
        if(data == null) return null;
        let buoni = new Buoni();
        buoni.amount = data.amount;
        buoni.description = data.description;
        buoni.type = data.etype;
        buoni.status = data.status;
        return buoni;
    }

    public static getData(data: any){
        return new Promise((resolve, reject) => {
            let buoni = new Buoni();
            buoni.amount = data.amount;
            buoni.description = data.description;
            buoni.type = data.etype;
            buoni.status = data.status;
            resolve(buoni);
        });
    }
   
}