import "./App.css";
import React, { Suspense, useState } from "react";

//Components
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Blog from "./Containers/Blog";

//utils
import Helmet from "react-helmet";
import KonamiCode from "./components/konamicode/konamiCode";

//config
import { config } from "./config";

function App() {
  return (
    <>
      <Helmet>
        <title>{config.title}</title>
        <meta charSet="utf-8" />
      </Helmet>

      <div className="App">
        <main className="App-header">
          <Navbar name="Kevin Hernandez - Blog" />
          <KonamiCode courseKey={""} />

          {/* blog posts */}
          <Blog />

          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
