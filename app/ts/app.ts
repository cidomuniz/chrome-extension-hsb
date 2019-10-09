const controller = new MenuController();

const twitchApi = new TwitchAPI();

console.log(twitchApi.GetTopGames());

controller.GetGames();
