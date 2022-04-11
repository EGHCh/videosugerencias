class Multimedia {
 #url;
 constructor(url) {
  this.#url = url;
 }
 get url() {
  return this.#url;
 }
 set url(nuevaUrl) {
  this.#url = nuevaUrl;
 }
 setInicio() {}
}

class Reproductor extends Multimedia {
 constructor(id) {
  super(`https://www.youtube.com/embed/${id}`);
  this.id = id;
 }
 playMultimedia(categoria) {
  $(`#${categoria}`).attr("src", this.url);
  console.log(this.url);
 }
 setInicio(tiempo) {
  this.url = this.url.concat(`?start=${tiempo}`);
 }
}

$(document).ready(() => {
 const $musica = $(`#btnMusica`);
 const $pelicula = $(`#btnPelicula`);
 const $serie = $(`#btnSerie`);

 $musica.click(() => {
  const reproductor = new Reproductor("ygr5AHufBN4");
  reproductor.setInicio("60");
  reproductor.playMultimedia("musica");
 });
 $pelicula.click(() => {
  const reproductor = new Reproductor("udGvUx70Q3U");
  reproductor.setInicio("400");
  reproductor.playMultimedia("pelicula");
 });
 $serie.click(() => {
  const reproductor = new Reproductor("udGvUx70Q3U");
  reproductor.setInicio("900");
  reproductor.playMultimedia("serie");
 });
});
