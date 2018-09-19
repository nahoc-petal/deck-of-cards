import * as React from 'react';
import Playground from './../Playground/Playground.component'; 
import './App.style.css';

class App extends React.Component<any, any> {

  public render(): React.ReactNode {
    return (
      <div className="app has-text-centered">
        <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Card Picker 2018</h1>
              <h2 className="subtitle">Pick a card, any card.</h2>
            </div>
          </div>
        </section>

        <Playground />

        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>Card Picker 2018</strong> by Cohan Carpentier.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
