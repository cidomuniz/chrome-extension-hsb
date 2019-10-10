const controller = new MenuController();
const twitchService = new TwitchService();

const urlString = window.location.href;
const url = new URL(urlString);
const game_id = url.searchParams.get("game_id");

if (game_id == null){
  controller.GetFirstGame();
}
else{
  controller.GetStreams(game_id);
}
