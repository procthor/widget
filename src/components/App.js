import React, { Component } from 'react';
import WidgetLeft from './widget_l';
import WidgetRight from './widget_r';
import '../App.css';





class App extends Component {


  render() {
    return (
      <div className="App">
        <WidgetLeft   />
        <WidgetRight  />

      </div>
    );
  }
}

export default App;
