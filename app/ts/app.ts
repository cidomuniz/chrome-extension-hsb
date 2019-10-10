const controller = new MenuController();

const twitchService = new TwitchService();

console.log(twitchService.GetTopGames());
console.log(twitchService.GetStreams("21779"));

controller.GetGames();
controller.GetStreams("21779");
$(document).ready(()=>{
  $('#cards').click( () =>{
    console.log($(this))
    console.log($(this).data('game'))
    controller.GetStreams($(this).attr('game-id'))});

})
  