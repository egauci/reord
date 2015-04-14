import React from 'react';
import {config, data} from './config';
import {winResize, scrollTo} from './ctrMain';
import BottomDock from './components/bottomDock';
import MoveButtons from './components/moveButtons';
import ShowSelected from './components/showSelected';
import DataTable from './components/dataTable';

React.initializeTouchEvents(true);

data.rows.forEach((itm, ix) => itm.id = ix);

let renderTable,
    setTableMetaAndRerenderAll;

let moveButtonClicked = function (which) {
  let toMove, toStay, scroll;
  switch (which) {
    case 'moveUp':
      for (let i = 0; i < data.rows.length; i += 1) {
        if (data.rows[i].selected) {
          let tmp = data.rows.splice(i, 1);
          data.rows.splice(i - 1, 0, tmp[0]);
        }
      }
      break;
    case 'moveDown':
      for (let i = data.rows.length - 1; i >= 0; i -= 1) {
        if (data.rows[i].selected) {
          let tmp = data.rows.splice(i, 1);
          data.rows.splice(i + 1, 0, tmp[0]);
        }
      }
      break;
    case 'moveTop':
      toMove = data.rows.filter(itm => itm.selected);
      toStay = data.rows.filter(itm => !itm.selected);
      toMove.forEach(itm => {itm.selected = false; itm.hidden = true; });
      data.rows = toMove.concat(toStay);
      scroll = 'top';
      break;
    case 'moveBottom':
      toMove = data.rows.filter(itm => itm.selected);
      toStay = data.rows.filter(itm => !itm.selected);
      toMove.forEach(itm => {itm.selected = false; itm.hidden = true; });
      data.rows = toStay.concat(toMove);
      scroll = 'bottom';
      break;
    default:
      break;
  }
  setTableMetaAndRerenderAll();
  if (scroll) {
    scrollTo(scroll);
  }
};

let renderMoveButtons = function () {
  React.render((
    <MoveButtons
      firstSelected={data.firstSelected}
      lastSelected={data.lastSelected}
      anySelected={data.countSelected > 0}
      handleClick={moveButtonClicked}
    />
  ), document.querySelector('#moveButtons'));
};

let renderShowSelected = function () {
  React.render(<ShowSelected countSelected = {data.countSelected} />,
              document.querySelector('#countSelected'));
};

setTableMetaAndRerenderAll = function () {
  let countSel = 0,
      rows = data.rows;
  data.firstSelected = rows[0].selected;
  data.lastSelected = rows[rows.length - 1].selected;
  rows.forEach(itm => countSel += itm.selected ? 1 : 0);
  data.countSelected = countSel;
  renderMoveButtons();
  renderShowSelected();
  renderTable();
};

let selChange = function (index) {
  data.rows[index].selected = !data.rows[index].selected;
  setTableMetaAndRerenderAll();
};

let tableDidUpdate = function () {
  let haveHidden = data.rows.some(itm => itm.hidden);
  if (haveHidden) {
    data.rows.forEach(itm => itm.hidden = false);
    setTimeout(renderTable, 100);
  }
};

renderTable = function () {
  React.render((
    <DataTable
      columns={config.columns}
      rows={data.rows}
      selChange={selChange}
      didUpdate={tableDidUpdate}
    />
  ), document.querySelector('#tableContainer'));
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
renderShowSelected();
renderTable();
