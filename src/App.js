import React from "react";
import "./App.scss";

const Banner = () => {
  return (
    <div className="banner">
      <img
        className="banner__img"
        src="https://placeimg.com/640/480/people"
        alt="img"
      ></img>
      <p className="banner__date">2 / 10 / 2020</p>
      <h1 className="banner__title">
        Gigantyczny tytul zrobiony fajnym fontem
      </h1>
      <p className="banner__descripton">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis
        diam et eros fringilla commodo. Quisque dapibus lectus et sem sodales,
        quis sagittis erat pellentesque. Nullam iaculis non urna in fringilla.
        Nulla maximus quam eget rutrum auctor. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Praesent quis diam et eros fringilla
        commodo. Quisque dapibus lectus et sem sodales, quis sagittis erat
        pellentesque. Nullam iaculis non urna in fringilla. Nulla maximus quam
        eget rutrum auctor.
      </p>
      <a className="banner__more-info" href="/toarticle">
        Dowiedz się wiecej...
      </a>
    </div>
  );
};

const MainArticle = () => {
  return (
    <div className="main-article">
      <img
        className="main-article__img"
        src="https://placeimg.com/640/480/tech"
        alt="img"
      ></img>
      <img
        className="main-article__img"
        src="https://placeimg.com/640/480/tech"
        alt="img"
      ></img>
    </div>
  );
};

const Secondary = () => {
  return <div className="secondary">Drugoplanowy artykul</div>;
};

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Banner />
        <MainArticle />
        <Secondary />
      </div>
    );
  }
}

export default App;
