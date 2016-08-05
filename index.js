'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Contents from './Contents';
import Info from './Info';

class Application extends React.Component {
  render() {
    return (
      <div className="app">
        <Header className="header"/>
        <Contents className="contents"/>
        <Info className="info"/>
      </div>
    );
  }
}

ReactDOM.render(
  <Application />,
  document.getElementById('container')
);
