class MenuController {
  private twitchAPI = new TwitchAPI();
  private _inputData: JQuery;

  constructor(){

  }

  GetGames(){
    this.twitchAPI.GetTopGames()
      .then((result) => { 
        
        console.log(<Game[]>result.data) 
      })
      .catch(() => { 'error' });
  }

}