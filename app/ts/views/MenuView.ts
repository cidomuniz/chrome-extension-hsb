import { Game } from '../models/index';
import { View } from './View';

export class MenuView extends View<Game[]> {

  template(model: Game[]): string {

    return model.map( game =>
      `<li class="has-subnav">
              <a href="#">
                <img class="menu-image" src="${game.Url.replace('{width}x{height}', '100x80')}" alt="">
                <span class="nav-text">
                  ${game.Name}
                </span>
              </a>
            </li>`
      ).join('') ;
  }

}