interface loginModelType {
  id: string | null;
  email: string | null;
  password: string | null;
  name: string | null;
  surname: string | null;
}

export default class LoginModel {
  public email: string = "";
  public password: string = "";
  public name: string = "";
  public surname: string = "";
  public id: string = "";

  constructor(item: loginModelType) {
    this._setEmail(item);
    this._setPassword(item);
    this._name(item);
    this._surname(item);
    this._id(item);
  }

  private _setEmail(item: loginModelType) {
    this.email = item.email ?? "";
  }

  private _setPassword(item: loginModelType) {
    this.password = item.password ?? "";
  }

  private _name(item: loginModelType) {
    this.name = item.name ?? "";
  }

  private _surname(item: loginModelType) {
    this.surname = item.surname ?? "";
  }

  private _id(item: loginModelType) {
    this.id = item.id ?? "";
  }
}
