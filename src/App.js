import React from "react";
import "./App.scss";

const Banner = () => {
  return (
    <div className="banner">
      <img
        className="banner__img"
        src="https://picsum.photos/id/1073/640/480"
        alt="img"
      ></img>
      <p className="banner__date">2 / 10 / 2020</p>
      <h1 className="banner__title">Duży tytuł zrobiony fajnym fontem</h1>
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
        Dowiedz się więcej
      </a>
    </div>
  );
};

const MainArticle = () => {
  return (
    <div className="main-article">
      <div className="article">
        <img
          className="article__img"
          src="https://picsum.photos/id/180/640/480"
          alt="img"
        ></img>
        <div className="article__shadow">Tytuł artykułu</div>
      </div>

      <div className="article">
        <img
          className="article__img"
          src="https://picsum.photos/id/119/640/480"
          alt="img"
        ></img>
        <div className="article__shadow">Tytuł artykułu</div>
      </div>
    </div>
  );
};

const Secondary = () => {
  return (
    <div className="secondary">
      <div className="art">
        <img
          className="art__img"
          alt="img"
          src="https://picsum.photos/id/195/480/360"
        ></img>
        <p className="art__date">2020/10/05</p>
        <h3 className="art__title">Tytuł drugoplanowego artykułu</h3>
        <a className="art__link" href="/">
          Czytaj dalej...
        </a>
      </div>

      <div className="art">
        <img
          className="art__img"
          alt="img"
          src="https://picsum.photos/id/2/480/360"
        ></img>
        <p className="art__date">2020/10/05</p>
        <h3 className="art__title">Tytuł drugoplanowego artykułu</h3>
        <a className="art__link" href="/">
          Czytaj dalej...
        </a>
      </div>

      <div className="art">
        <img
          className="art__img"
          alt="img"
          src="https://picsum.photos/id/201/480/360"
        ></img>
        <p className="art__date">2020/10/05</p>
        <h3 className="art__title">Tytuł drugoplanowego artykułu</h3>
        <a className="art__link" href="/">
          Czytaj dalej...
        </a>
      </div>

      <div className="art">
        <img
          className="art__img"
          alt="img"
          src="https://picsum.photos/id/211/480/360"
        ></img>
        <p className="art__date">2020/10/05</p>
        <h3 className="art__title">Tytuł drugoplanowego artykułu</h3>
        <a className="art__link" href="/">
          Czytaj dalej...
        </a>
      </div>

      <div className="art">
        <img
          className="art__img"
          alt="img"
          src="https://picsum.photos/id/250/480/360"
        ></img>
        <p className="art__date">2020/10/05</p>
        <h3 className="art__title">Tytuł drugoplanowego artykułu</h3>
        <a className="art__link" href="/">
          Czytaj dalej...
        </a>
      </div>

      <div className="art">
        <img
          className="art__img"
          alt="img"
          src="https://picsum.photos/id/252/480/360"
        ></img>
        <p className="art__date">2020/10/05</p>
        <h3 className="art__title">Tytuł drugoplanowego artykułu</h3>
        <a className="art__link" href="/">
          Czytaj dalej...
        </a>
      </div>

      <div className="art">
        <img
          className="art__img"
          alt="img"
          src="https://picsum.photos/id/26/480/360"
        ></img>
        <p className="art__date">2020/10/05</p>
        <h3 className="art__title">Tytuł drugoplanowego artykułu</h3>
        <a className="art__link" href="/">
          Czytaj dalej...
        </a>
      </div>

      <div className="art">
        <img
          className="art__img"
          alt="img"
          src="https://picsum.photos/id/274/480/360"
        ></img>
        <p className="art__date">2020/10/05</p>
        <h3 className="art__title">Tytuł drugoplanowego artykułu</h3>
        <a className="art__link" href="/">
          Czytaj dalej...
        </a>
      </div>

      <div className="art">
        <img
          className="art__img"
          alt="img"
          src="https://picsum.photos/id/3/480/360"
        ></img>
        <p className="art__date">2020/10/05</p>
        <h3 className="art__title">Tytuł drugoplanowego artykułu</h3>
        <a className="art__link" href="/">
          Czytaj dalej...
        </a>
      </div>
    </div>
  );
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
