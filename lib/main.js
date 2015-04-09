import BottomDock from './components/bottomDock';
import React from 'react';
import config from './config';
import winResize from './ctrMain';

winResize('#ctrMain', config.bottomDockHeight);

React.render(<BottomDock height={config.bottomDockHeight} />, document.querySelector('#bottomDock'));
