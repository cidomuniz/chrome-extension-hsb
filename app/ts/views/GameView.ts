class GameView extends View<string> {

  template(gameName: string): string {
    return `<span>${gameName}</span>`;
  }

}