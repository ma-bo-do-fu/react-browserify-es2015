'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Contents from './contents';
import Info from './info';

const Application = React.createClass({
  render: function() {
    return (
      <div className="app">
        <Header className="header"/>
        <Contents className="contents"/>
        <Info className="info"/>
      </div>
    );
  }
});

ReactDOM.render(
  <Application />,
  document.getElementById('container')
);
