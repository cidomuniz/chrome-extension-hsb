const menuController = new MenuController();

menuController.GetGames();

$('#menu').click(() => {$("html, body").animate({ scrollTop: 0 }, "slow");})

$(document)
  .ajaxStart(function () {
    $('#loading').show(0);
  })
  .ajaxStop(function () {
    $('#loading').delay(2000).hide(0);
  });