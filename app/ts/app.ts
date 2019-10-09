import { MenuController } from './controllers/MenuController';
import { TwitchAPI } from './helpers/index';

const controller = new MenuController();

const twitchApi = new TwitchAPI();

console.log(twitchApi.GetTopGames());

controller.GetGames();
