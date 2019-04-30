import React, { Component } from 'react';
import Footer from './components/Footer';
import HraMap from './components/Map';
import Navi from './components/Navi';
import Plot from './components/Plot';
import './App.css';

class App extends Component {

  constructor(props) {
    super (props); // Required to call original constructor
    this.state = {
      title: "Habitat Risk Assessment"
    }
  }

  // Alert users if browser type is not Chrome, Opera, or Firefox
  checkBrowser(alert) {
    // Chrome 1+
    let isChrome = !!window.chrome && !!window.chrome.webstore;
    // Opera 8.0+
    let isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Firefox 1.0+
    let isFirefox = typeof InstallTrigger !== 'undefined';

    if (!(isChrome | isOpera | isFirefox)) {
      window.alert('It is suggested to use Chrome, Opera, or Firefox to get the best performance on this web page.');
    }
  }

  render() {
    return (
      <div className="App">
        <Navi title={this.state.title}/>
        <HraMap />
        <Plot />
        <Footer />
      </div>
    );
  }
}

export default App;
