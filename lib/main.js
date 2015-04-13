import React from 'react';
import {config, data} from './config';
import winResize from './ctrMain';
import BottomDock from './components/bottomDock';
import MoveButtons from './components/moveButtons';
import ShowSelected from './components/showSelected';
import DataTable from './components/dataTable';

React.initializeTouchEvents(true);

let renderTable,
    setTableMetaAndRerenderAll;

let moveButtonClicked = function (which) {
  let toMove, toStay;
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
      data.rows = toMove.concat(toStay);
      break;
    case 'moveBottom':
      toMove = data.rows.filter(itm => itm.selected);
      toStay = data.rows.filter(itm => !itm.selected);
      data.rows = toStay.concat(toMove);
      break;
    default:
      break;
  }
  setTableMetaAndRerenderAll();
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

renderTable = function () {
  React.render((
    <DataTable
      columns={config.columns}
      rows={data.rows}
      selChange={selChange}
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
