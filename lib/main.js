import BottomDock from './components/bottomDock';
import React from 'react';
import config from './config';
import winResize from './ctrMain';

winResize('#ctrMain', config.bottomDockHeight);

React.render((
  <BottomDock height={config.bottomDockHeight}>
    <button className="primary">Save</button>
    <button className="secondary">Back</button>
    <button className="tertiary">Cancel</button>
  </BottomDock>
), document.querySelector('#bottomDock'));
