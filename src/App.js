import "./App.css";
import React, { Suspense, useState } from "react";

//Components
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

//mockups
import Card from "./components/card/card";

//utils
import Helmet from "react-helmet";
import KonamiCode from "./components/konamicode/konamiCode";

//configs
import { Config } from "./config";

function App() {
  return (
    <>
      <Helmet>
        <title>{ Config.title }</title>
        <meta charSet="utf-8" />
      </Helmet>
      <div className="App">
        <main className="App-header">
          <Navbar name="Kevin Hernandez - Blog" />
          <KonamiCode courseKey={"null"} />
          <Card />

          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
