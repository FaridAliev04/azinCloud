export default class emailChangeModel {
    public email: string | null = null;
    public id: string|null=null


    constructor(item: any) {

        this._setEmail(item);
        this._setId(item)
        
    }
    private _setEmail({email,}: any) {
        this.email = email;
    }
    private _setId({id}:any){
        this.id=id
    }


}
