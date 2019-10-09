import { MenuView } from '../views/MenuView';
import { Game } from '../models/Game';
import { TwitchAPI } from '../helpers/index';

export class MenuController {
  private _twitchAPI = new TwitchAPI();
  private _menuView = new MenuView('#menu');

  constructor(){

  }

  GetGames(){
    this._twitchAPI.GetTopGames()
      .then((result) => { 
        
        this._menuView.update(result.data);
      })
      .catch(() => { 'error' });
  }

}