class Game {

  constructor(private _name: string, private _id: number, private _box_art_url: string) { }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }

  get box_art_url() {
    return this._box_art_url;
  };
}