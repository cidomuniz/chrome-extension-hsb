const controller = new MenuController();
const twitchService = new TwitchService();

const urlString = window.location.href;
const url = new URL(urlString);
const gameId = url.searchParams.get("game_id");
const gameName = url.searchParams.get("game_name");

if (gameId == null || gameName == null){
  controller.GetFirstGame();
}
else{
  controller.GetStreams(gameId, gameName);
}

$(document)
  .ajaxStart(function () {
    $('#loading').show();
  })
  .ajaxStop(function () {
    $('#loading').delay(500).hide(0);
  });