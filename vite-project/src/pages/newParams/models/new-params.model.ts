interface NewsItem {
    id: string | null;
    mainImg: string | null;
    header: string | null;
    headerAz: string | null;
    mainText: string | null;
    mainTextAz: string | null;
    texts: string[] | null;
    textsAz: string[] | null;
    tarix: string | null;
  }
export default class newsParamsModel {
    public id: string|undefined|null=null;
    public mainImg: string| null = null;
    public header:string|null=null;
    public headerAz:string|null=null;
    public mainText:string|null=null;
    public mainTextAz:string|null=null;
    public texts:string[]|null=null;
    public textsAz:string[]|null=null;
    public time:string|null=null;



    constructor(item: any) {
        this._setId(item) 
        this._setMainImg(item)
        this._header(item)
        this._headerAz(item)
        this._mainText(item)
        this._mainTextAz(item)
        this._texts(item)
        this._textsAz(item)
        this._time(item)


    }

    private _setId({id}:NewsItem){
        this.id=id
    }
    private _setMainImg({mainImg}:NewsItem){
        this.mainImg=mainImg
    }
    private _header({header}:NewsItem){
        this.header=header
    }
    private _headerAz({headerAz}:NewsItem){
        this.headerAz=headerAz
    }
    private _mainText({mainText}:NewsItem){
        this.mainText=mainText
    }
    private _mainTextAz({mainTextAz}:NewsItem){
        this.mainTextAz=mainTextAz
    }
    private _texts({texts}:NewsItem){
        this.texts=texts
    }
    private _textsAz({textsAz}:NewsItem){
        this.textsAz=textsAz
    }
    private _time({tarix}:NewsItem){
        this.time=tarix
    }


}
