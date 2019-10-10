class MenuController {
  private _twitchService = new TwitchService();
  private _menuView = new MenuView('#menu');
  private _StreamsView = new StreamsView('#cards');

  constructor(){

  }
  GetFirstGame() {
    this._twitchService.GetTopGame()
      .then((result) => { 
        const game: Game = result.data[0];
        this.GetStreams(game.id.toString());
      })
      .catch(() => { return 'error' });
  }
  
  GetGames(){
    this._twitchService.GetTopGames()
      .then((result) => { 
        this._menuView.update(result.data);
      })
      .catch(() => { console.log('error') });
  }

  GetStreams(id: string){
    this._twitchService.GetStreams(id)
      .then((result) => { 
        this._StreamsView.update(result.data);
      })
      .catch(() => { console.log('error') });
  }

}