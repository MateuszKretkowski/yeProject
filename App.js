import logo from './logo.svg';
import './App.css';

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
      <section className="ow">
          <h5 className="section_subtitle">WHO IS KANYE?</h5>
          <h1 className="section_title">THE MOST INFLUENTIAL ARTIST OF EARLY 21 CENTURY</h1>
        <div className="ow_container">
          <div className="kanye_photo-collection">
            <img src={require("./ye_bg7.png")} className="kanye_photo" />
          </div>
          <div className="kanye_overwiew">
            <h1 className="title">KANYE WEST</h1>
            <h2 className="subtitle">Ye is the best ofc sasdasdd dadd</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
