import * as React from 'react';
import Playground from './Playground'; 

class App extends React.Component<any, any> {

  public render(): React.ReactNode {

    return (
      <div className="has-text-centered" style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100vh',
      }}>
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
