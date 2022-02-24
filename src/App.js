import './App.css';
import React, { Suspense, useState } from 'react';

//Components
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

//mockups
import Card from './components/card/card'
// import Post from './components/post/post';

//konami code
import KonamiCode from './components/konamicode/konamiCode';


function App() {

  return (
    <div className="App">
      <main className="App-header">
       
        <Navbar name="Kevin Hernandez - Blog" />
        <KonamiCode courseKey={'null'}/>
        <Card />
        

      
        <Footer />
      </main>
    </div>


  );
}



export default App;
