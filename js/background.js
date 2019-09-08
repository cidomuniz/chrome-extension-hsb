var streams;
var channel;
var tt;
var list = "";


$(document).ready(function () {
    getStreams();

    $("body").tooltip({
        selector: '[data-toggle=tooltip]'
    });

    $('#lol').click(function (e) {
        getStreams("lol");
    });
    $('#apex').click(function (e) {
        getStreams("apex");
    });
    $('#pubg').click(function (e) {
        getStreams("pubg");
    });
    $('#fortnite').click(function (e) {
        getStreams("fortnite");
    });
    $('#csgo').click(function (e) {
        getStreams("csgo");
    });
    $('#dota2').click(function (e) {
        getStreams("dota2");
    });
    $('#overwatch').click(function (e) {
        getStreams("overwatch");
    });
    $('#hearthstone').click(function (e) {
        getStreams("hearthstone");
    });
});


function getStreams(game) {
    switch (game) {
        case "lol":
            url = "https://api.twitch.tv/kraken/streams?game=League+of+Legends&client_id=haeyonp05j4wiphav3eppivtdsvlyoq&limit=100";
            iconPath = "../icon/lol/icons8-league-of-legends-128.png";
            break;
        case "pubg":
            url = "https://api.twitch.tv/kraken/streams?game=PLAYERUNKNOWN%27S+BATTLEGROUNDS&client_id=haeyonp05j4wiphav3eppivtdsvlyoq&limit=100";
            iconPath = "../icon/pubg/icons8-pubg-100.png";
            break;
        case "fortnite":
            url = "https://api.twitch.tv/kraken/streams?game=fortnite&client_id=haeyonp05j4wiphav3eppivtdsvlyoq&limit=100";
            iconPath = "../icon/fortnite/icons8-fortnite-100.png";
            break;
        case "csgo":
            url = "https://api.twitch.tv/kraken/streams?game=counter-strike:+Global+Offensive&client_id=haeyonp05j4wiphav3eppivtdsvlyoq&limit=100";
            iconPath = "../icon/csgo/icons8-counter-strike-100.png";
            break;
        case "overwatch":
            url = "https://api.twitch.tv/kraken/streams?game=overwatch&client_id=haeyonp05j4wiphav3eppivtdsvlyoq&limit=100";
            iconPath = "../icon/overwatch/icons8-overwatch-100.png";
            break;
        case "dota2":
            url = "https://api.twitch.tv/kraken/streams?game=dota+2&client_id=haeyonp05j4wiphav3eppivtdsvlyoq&limit=100";
            iconPath = "../icon/dota/icons8-dota-2-100.png";
            break;
        case "hearthstone":
            url = "https://api.twitch.tv/kraken/streams?game=hearthstone&client_id=haeyonp05j4wiphav3eppivtdsvlyoq&limit=100";
            iconPath = "../icon/hearthstone/icons8-hearthstone-100.png";
            break;
        case "apex":
            url = "https://api.twitch.tv/kraken/streams?game=Apex+Legends&client_id=haeyonp05j4wiphav3eppivtdsvlyoq&limit=100";
            iconPath = "../icon/apex/apex_legends___icon_by_blagoicons_dcywezc_96x96.png";
            break;
        default:
            url = "https://api.twitch.tv/kraken/streams?game=League+of+Legends&client_id=haeyonp05j4wiphav3eppivtdsvlyoq&limit=100";
            iconPath = "../icon/lol/icons8-league-of-legends-128.png";
            break;
    }

    $.ajax({
        type: "GET",
        url: url,
        content: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            streams = data.streams;
            $("#tbody").html("");
            for (var i = 0; i < streams.length; i++) {
                var channel = streams[i].channel;
                var titulo = channel.display_name;
                var viewers = streams[i].viewers;
                var url = channel.url;
                var tooltipHtml = "<div class=' tip text-white bg-dark' ><div class='row'><div class='col-4'><img src='" + channel.logo + "' alt='Card image cap'>" +
                    "</div><div class='col-8'><p>" + channel.status + "</p></div></div></div>";

                list = "<tr data-toggle='tooltip' data-html='true' class='cleck' title=\"" + tooltipHtml + "\" data-href ='" + url + "'>" +
                    "<th scope = 'row' >" + "<img class='ticon' src='" + iconPath + "'</img>" + "</th>" +
                    "<td>" + titulo + "</td>" +
                    "<td>" + viewers + "</td>" +
                    "</tr>";
                $("#tbody").append(list);
            }
            $('tr.cleck').click(function (e) {
                var url = $(this).attr('data-href');
                var win = window.open(url, '_blank');
                win.focus();
            });

        },
        error: function () {
            $("#tbody").append("error");
        }
    });
}
