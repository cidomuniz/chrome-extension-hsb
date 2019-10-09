export class Game {

  constructor(private name: string, private id: number, private box_art_url: string) { }

  get Name() {
    return this.name;
  }

  get Id() {
    return this.id;
  }

  get Url() {
    return this.box_art_url;
  };
}