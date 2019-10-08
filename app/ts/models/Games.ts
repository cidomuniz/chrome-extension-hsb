class Games {

  private _games: Game[] = [];

  adiciona(game: Game): void {

      this._games.push(game);
  }

  paraArray(): Game[] {

      return [].concat(this._games);
  }
}