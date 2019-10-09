class MenuController {
  private _twitchAPI = new TwitchAPI();
  private _menuView = new MenuView('#menu');

  constructor(){

  }

  GetGames(){
    this._twitchAPI.GetTopGames()
      .then((result) => { 
        
        console.log(result.data);
        this._menuView.update(result.data);
      })
      .catch(() => { console.log('error') });
  }

}