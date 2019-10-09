class MenuView extends View<Game[]> {

  template(model: Game[]): string {
    return model.map( game =>
      `<li class="has-subnav">
              <a href="#">
                <img class="menu-image" src="${game.box_art_url.replace('{width}x{height}', '100x80')}" alt="">
                <span class="nav-text">
                  ${game.name}
                </span>
              </a>
            </li>`
      ).join('') ;
  }

}