class MenuController {
  private _twitchService = new TwitchService();
  private _menuView = new MenuView('#menu');
  private _streamsView = new StreamsView('#cards');
  private _gameView = new GameView('#stream-name');

  constructor(){

  }
  GetFirstGame() {
    this._twitchService.GetTopGame()
      .then((result) => { 
        const game: Game = result.data[0];
        this.GetStreams(game.id.toString(), game.name);
      })
      .catch(() => { window.location.replace('error.html') });
  }
  
  GetGames(){
    this._twitchService.GetTopGames()
      .then((result) => { 
        this._menuView.update(result.data);
      })
      .catch(() => { window.location.replace('error.html') });
  }

  GetStreams(id: string, gameName: string){
    this._twitchService.GetStreams(id)
      .then((result) => { 
        this._gameView.update(gameName)
        this._streamsView.update(result.data);
      })
      .catch(() => { window.location.replace('error.html') });
  }

}