import * as React from 'react';
import { Footer } from './../Footer/Footer.component'; 
import { Header } from './../Header/Header.component'; 
import Playground from './../Playground/Playground.component'; 
import './App.style.css';

class App extends React.Component<any, any> {

  public render(): React.ReactNode {
    return (
      <div className="app has-text-centered">
        <Header />
        <Playground />
        <Footer />
      </div>
    );
  }
}

export default App;
