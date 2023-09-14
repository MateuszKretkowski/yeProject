import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <img src={require("./ye_bg.png")} className="ye_bg" />
      <div className="navBar">
        <div className="navBar_container">
          <h3 className="navbar_link">menu</h3>
          <img src={require("./ye_logo.png")} className="ye_logo" />
          <h3 className="navbar_link">settings</h3>
        </div>
      </div>
      <header>
        <div className="header_container">
          <h1 className="header_title">kanYe West</h1>
          <h4 className="header_subtitle">" If you're a fan of <span className="text_glow cartoony">Ye</span>, you're a fan of <span className="text_glow cartoony">Yourself</span> "</h4>
          {/* <div className="scroll" /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
