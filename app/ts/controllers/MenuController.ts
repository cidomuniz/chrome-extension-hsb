class MenuController {
  private _twitchService = new TwitchService();
  private _menuView = new MenuView('#menu');
  private _StreamsView = new StreamsView('#cards');

  constructor(){

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
        
        console.log(result.data);
        this._StreamsView.update(result.data);
      })
      .catch(() => { console.log('error') });
  }

}