const controller = new MenuController();
const twitchService = new TwitchService();

const urlString = window.location.href;
const url = new URL(urlString);
const gameId = url.searchParams.get("game_id");
const gameName = url.searchParams.get("game_name");

console.log(gameName)

if (gameId == null || gameName == null){
  controller.GetFirstGame();
}
else{
  controller.GetStreams(gameId, gameName);
}
