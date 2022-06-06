import "./App.css";
import React from "react";

import { Route, Routes } from "react-router";

//Components
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Blog from "./Containers/Blog";
import BlogPost from './Containers/BlogPost';

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
          <Navbar name="Kevin Hernández - Blog" />
          <KonamiCode courseKey={""} />

          <Routes>
            {/* blog posts */}
            <Route exact path="/" element={<Blog />} />
            <Route exact path="/post/:title/:id" element={<BlogPost />} />
            <Route path="*" element={<Blog />} />
          </Routes>

          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
