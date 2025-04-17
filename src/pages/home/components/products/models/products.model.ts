interface serviceModelType {
    id: string ;
    header: string ;
    headerAz: string ;
    text: string ;
    textAz: string ;
    kategory: string ;
    pul: string ;
  }
export default class serviceModel {
    public id: string = "";
    public header:string="";
    public headerAz:string="";
    public text:string="";
    public textAz:string="";
    public kategory:string="";
    public pul:string=""

  
    constructor(item: any) {
      this._id(item);
      this._header(item);
      this._headerAz(item);
      this._text(item);
      this._textAz(item);
      this._kategory(item);
      this._pul(item);
    }

    private _id({ id }: serviceModelType) {
      this.id = id;
    }
    private _header({header}:serviceModelType){
        this.header=header
    }
    private _headerAz({headerAz}:serviceModelType){
        this.headerAz=headerAz
    }
    private _text({text}:serviceModelType){
        this.text=text
    }
    private _textAz({textAz}:serviceModelType){
        this.textAz=textAz
    }
    private _kategory({kategory}:serviceModelType){
        this.kategory=kategory
    }
    private _pul({pul}:serviceModelType){
        this.pul=pul+"  AZN"
    }
  }
  
  