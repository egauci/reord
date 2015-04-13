import React from 'react';
import {config, data} from './config';
import winResize from './ctrMain';
import BottomDock from './components/bottomDock';
import MoveButtons from './components/moveButtons';

React.initializeTouchEvents(true);

let renderMoveButtons = function () {
  React.render((
    <MoveButtons
      firstSelected={data.firstSelected}
      lastSelected={data.lastSelected}
      anySelected={data.countSelected > 0}
    />
  ), document.querySelector('#moveButtons'));
};

winResize('#ctrMain', config.bottomDockHeight);

React.render((
  <BottomDock height={config.bottomDockHeight}>
    <button className="primary">Save</button>
    <button className="secondary">Back</button>
    <button className="tertiary">Cancel</button>
  </BottomDock>
), document.querySelector('#bottomDock'));

renderMoveButtons();
