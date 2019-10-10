class StreamsView extends View<Stream[]> {

  template(model: Stream[]): string {
    return model.map( stream =>
      `<a class="card" href="https://twitch.tv/${stream.user_name}" target="_blank">
        <div class="">
            <img class="card-img-top"
                src="${stream.thumbnail_url.replace('{width}x{height}', '130x100')}"
                alt="Imagem de capa do card">
            <div class="card-texto">
                <p class="card-nome">${stream.user_name}<br><span class="viewers"><i class="far fa-laugh-beam"></i></i>${stream.viewer_count}</span></p>
            </div>
        </div>
      </a>`
      ).join('') ;
  }

}