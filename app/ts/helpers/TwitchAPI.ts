export class TwitchAPI {

  private _url: string = 'https://api.twitch.tv/helix';
  private _clientId: string = 'tbr05r7ictx1fditg6mjpn1pdlpup5';
  private _topGames: string = '/games/top/';
  private _topStreams100: string = '/streams?first=100';

  constructor() {

  }

  async GetTopGames(): Promise<any> {

    let ajaxsettings: JQueryAjaxSettings = {
      url: this._url + this._topGames,
      contentType: "application/json",
      type: "GET",
      data: JSON.stringify(''),
      processData: false,
      headers: {
        "Client-ID": this._clientId,
      }
    };

    return await Promise.resolve($.ajax(ajaxsettings));
  }
}