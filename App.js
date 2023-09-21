import logo from "./logo.svg";
import "./App.css";
import React, { useState, useCallback } from "react";
import { motion } from "framer-motion"

// export const UseTransitionDemoPage = () => {
//   const [index, setIndex] = useState(0);
//   const onClick = useCallback(
//     () => setIndex((state) => (state + 1) % items.length),
//     []
//   );
//   const transitions = useTransition(index, (p) => p, {
//     from: { opacity: 0, top: 0, left: 0 },
//     enter: { opacity: 1, top: 50, left: 50 },
//     leave: { opacity: 0, top: 0, left: 0 },
//   });

//   return (
//     <div className="albums_container" onClick={onClick}>
//       {transitions.map(({ item, props, key }) => {
//         const Page = items[item];
//         return <Page key={key} style={props} />;
//       })}
//     </div>
//   );
// };

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
        <img src={require("./ye_section-bg.png")} className="ye_bg inverted" />
        <img src={require("./ye_section-bg.png")} className="ye_bg nextone" />
        <div className="ow_container">
          <div className="introduction-wrapper">
            <h1 className="section_title">YE</h1>
          </div>
          <div className="albums_container">
            <motion.div className="album tcd"
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            transition={{
  ease: "linear",
  duration: 2,
  x: { duration: 1 }
}}
            >
              <figure className="album_img-wrapper">
                <img className="album_vinyl" src={require("./tcd_vinyl.jpg")} />
                <img className="album_cd" src={require("./tcd_cd.webp")} />
              </figure>
              <div className="album_text-wrapper">
                <h2>THE COLLEGE DROPOUT</h2>
                <h4></h4>
              </div>
            </motion.div>
            <motion.div className="album lr">
              <figure className="album_img-wrapper">
                <img className="album_vinyl" src={require("./lr_vinyl.webp")} />
                <img className="album_cd" src={require("./lr_cd.png")} />
              </figure>
              <div className="album_text-wrapper">
                <h2>LATE REGISTRATION</h2>
                <h4></h4>
              </div>
            </motion.div>
            <motion.div className="album g">
              <figure className="album_img-wrapper">
                <img className="album_vinyl " src={require("./g_vinyl.webp")} />
                <img className="album_cd" src={require("./g_cd.png")} />
              </figure>
              <div className="album_text-wrapper">
                <h2>GRADUATION</h2>
                <h4></h4>
              </div>
            </motion.div>
            <motion.div className="album g">
              <figure className="album_img-wrapper">
                <img className="album_vinyl " src={require("./g_vinyl.webp")} />
                <img className="album_cd" src={require("./g_cd.png")} />
              </figure>
              <div className="album_text-wrapper">
                <h2>080'S AND HEARTBREAK</h2>
                <h4></h4>
              </div>
            </motion.div>
            <motion.div className="album g">
              <figure className="album_img-wrapper">
                <img className="album_vinyl " src={require("./g_vinyl.webp")} />
                <img className="album_cd" src={require("./g_cd.png")} />
              </figure>
              <div className="album_text-wrapper">
                <h2>MY BEAUTIFUL DARK TWISTED FANTASY</h2>
                <h4></h4>
              </div>
            </motion.div>
            <motion.div className="album g">
              <figure className="album_img-wrapper">
                <img className="album_vinyl " src={require("./g_vinyl.webp")} />
                <img className="album_cd" src={require("./g_cd.png")} />
              </figure>
              <div className="album_text-wrapper">
                <h2>WATCH THE THRONE</h2>
                <h4></h4>
              </div>
            </motion.div>
            <motion.div className="album g">
              <figure className="album_img-wrapper">
                <img className="album_vinyl " src={require("./g_vinyl.webp")} />
                <img className="album_cd" src={require("./g_cd.png")} />
              </figure>
              <div className="album_text-wrapper">
                <h2>YEEZUS</h2>
                <h4></h4>
              </div>
            </motion.div>
            <motion.div className="album g">
              <figure className="album_img-wrapper">
                <img className="album_vinyl " src={require("./g_vinyl.webp")} />
                <img className="album_cd" src={require("./g_cd.png")} />
              </figure>
              <div className="album_text-wrapper">
                <h2>THE LIFE OF PABLO</h2>
                <h4></h4>
              </div>
            </motion.div>
            <motion.div className="album g">
              <figure className="album_img-wrapper">
                <img className="album_vinyl " src={require("./g_vinyl.webp")} />
                <img className="album_cd" src={require("./g_cd.png")} />
              </figure>
              <div className="album_text-wrapper">
                <h2>YE</h2>
                <h4></h4>
              </div>
            </motion.div>
            <motion.div className="album g">
              <figure className="album_img-wrapper">
                <img className="album_vinyl " src={require("./g_vinyl.webp")} />
                <img className="album_cd" src={require("./g_cd.png")} />
              </figure>
              <div className="album_text-wrapper">
                <h2>KIDS SEE GHOSTS</h2>
                <h4></h4>
              </div>
            </motion.div>
            <motion.div className="album g">
              <figure className="album_img-wrapper">
                <img className="album_vinyl " src={require("./g_vinyl.webp")} />
                <img className="album_cd" src={require("./g_cd.png")} />
              </figure>
              <div className="album_text-wrapper">
                <h2>JESUS IS KING</h2>
                <h4></h4>
              </div>
            </motion.div>
            <motion.div className="album g">
              <figure className="album_img-wrapper">
                <img className="album_vinyl " src={require("./g_vinyl.webp")} />
                <img className="album_cd" src={require("./g_cd.png")} />
              </figure>
              <div className="album_text-wrapper">
                <h2>DONDA</h2>
                <h4></h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
