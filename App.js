import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={require("./ye_bg6.jpg")} className="ye_bg" />
      <div className="navBar">
        <div className="navBar_container">
          <h3 className="navbar_link">MENU</h3>
          <img src={require("./ye_logo.png")} className="ye_logo" />
          <h3 className="navbar_link">SETTINGS</h3>
        </div>
      </div>
      <header>
        {/* <div className="header_container"> */}
        {/* <h1 className="header_title">kanYe West</h1> */}
        {/* <h4 className="header_subtitle">" If you're a fan of <span className="text_glow cartoony">Ye</span>, you're a fan of <span className="text_glow cartoony">Yourself</span> "</h4> */}
        {/* <div className="scroll" /> */}
        {/* </div> */}
      </header>
      <section className="who">
        <div className="who_container">
          <div></div>
        </div>
      </section>
      <section className="ow">
        <div className="ow_container">
          <div className="introduction-wrapper">
            <h1 className="section_title">BIBLIOGRAPHY</h1>
          </div>
          <div className="albums_container">
            <div className="album tcd">
              <figure className="album_img-wrapper">
                <img className="album_vinyl" src={require("./tcd_vinyl.jpg")} />
                <img className="album_cd" src={require("./tcd_cd.webp")} />
              </figure>
              <div className="album_text-wrapper">
                <h2>THE COLLEGE DROPOUT</h2>
                <h4></h4>
              </div>
            </div>
            <div className="album lr">
              <figure className="album_img-wrapper">
                <img className="album_vinyl" src={require("./lr_vinyl.webp")} />
                  <img className="album_cd" src={require("./lr_cd.png")} />
              </figure>
              <div className="album_text-wrapper">
                <h2>LATE REGISTRATION</h2>
                <h4></h4>
              </div>
            </div>
            <div className="album g">
              <figure className="album_img-wrapper">
                <img className="album_vinyl " src={require("./g_vinyl.webp")} />
                <img className="album_cd" src={require("./g_cd.png")} />
              </figure>
              <div className="album_text-wrapper">
                <h2>GRADUATION</h2>
                <h4></h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
