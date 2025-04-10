interface mainServiceModelType {
    id: string ;
    header: string ;
    headerAz: string ;
    text: string ;
    textAz: string ;
    kategory: string ;
    pul: string ;
  }
export default class mainServiceModel {
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

    private _id({ id }: mainServiceModelType) {
      this.id = id;
    }
    private _header({header}:mainServiceModelType){
        this.header=header
    }
    private _headerAz({headerAz}:mainServiceModelType){
        this.headerAz=headerAz
    }
    private _text({text}:mainServiceModelType){
        this.text=text
    }
    private _textAz({textAz}:mainServiceModelType){
        this.textAz=textAz
    }
    private _kategory({kategory}:mainServiceModelType){
        this.kategory=kategory
    }
    private _pul({pul}:mainServiceModelType){
        this.pul=pul+"  AZN"
    }
  }
  
  