import "./App.css";
import React, { Suspense, useState } from "react";

//Components
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

//mockups
import Card from "./components/card/card";

//utils
import Helmet from "react-helmet";
import { ApolloProvider } from '@apollo/react-hooks';
import KonamiCode from "./components/konamicode/konamiCode";
import { client } from "./Utils/apollo";

//config
import { config } from "./config";


function App() {
  return (
    <>
      <Helmet>
        <title>{config.title}</title>
        <meta charSet="utf-8" />
      </Helmet>
      <ApolloProvider client={client}>
        <div className="App">
          <main className="App-header">
            <Navbar name="Kevin Hernandez - Blog" />
            <KonamiCode courseKey={"null"} />
            <Card />
            <Footer />
          </main>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
