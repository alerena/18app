export class User {
    
    private _name : string;
    private _lastname : string;
    private _cf : string;
    private _birthDate : string;
    private _birthCity : string;
    private _residenza : string;
    private _tel : number;
    private _mail : string;
    private _credito : number;

    public get birthCity() : string {
        return this._birthCity;
    }
    public set birthCity(v : string) {
        this._birthCity = v;
    }

    public get credito() : number {
        return this._credito;
    }
    public set credito(v : number) {
        this._credito = v;
    }
    
    public get mail() : string {
        return this._mail;
    }
    public set mail(v : string) {
        this._mail = v;
    }
    

    public get tel() : number {
        return this._tel;
    }
    public set tel(v : number) {
        this._tel = v;
    }
    
    public get residenza() : string {
        return this._residenza;
    }
    public set residenza(v : string) {
        this._residenza = v;
    }
    
    public get birthDate() : string {
        return this._birthDate;
    }
    public set birthDate(v : string) {
        this._birthDate = v;
    }
    
    public get cf() : string {
        return this._cf;
    }
    public set cf(v : string) {
        this._cf = v;
    }
    
    public get lastname() : string {
        return this._lastname;
    }
    public set lastname(v : string) {
        this._lastname = v;
    }
    
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }

    public static create(user: any){
        let u = new User();
        u.birthCity = user.birthCity;
        u.birthDate = user.birthDate;
        u.cf = user.cf;
        u.credito = user.credito;
        u.lastname = user.lastname; 
        u.mail = user.mail;
        u.name = user.name;
        u.residenza = user.residenza;
        u.tel = user.tel;
        return u;
    }
    
   
}