/*global Modernizr */
let config = {
  bottomDockHeight: Modernizr.touch ? 60 : 40,
  columns: [
    {label: 'Column A', dkey: 'a'},
    {label: 'Column B', dkey: 'b'},
    {label: 'Column C', dkey: 'c'}
  ]
};

let data = {
  firstSelected: false,
  lastSelected: false,
  countSelected: 0,
  rows: [
    {/*id: '1', */a: 'Ullamcorper', b: 'Odio', c: '1'},
    {/*id: '2', */a: 'Et', b: 'Eget', c: '2'},
    {/*id: '3', */a: 'Amet', b: 'A', c: '3'},
    {/*id: '4', */a: 'Donec', b: 'Pede', c: '4'},
    {/*id: '5', */a: 'Velit', b: 'Non', c: '5'},
    {/*id: '6', */a: 'Sodales', b: 'Nullam', c: '6'},
    {/*id: '7', */a: 'Aliquam', b: 'Sed', c: '7'},
    {/*id: '8', */a: 'Nam', b: 'Habitant', c: '8'},
    {/*id: '9', */a: 'Lectus', b: 'Pellentesque', c: '9'},
    {/*id: '10',*/a: 'Quis', b: 'Ornare', c: '10'},
    {/*id: '11',*/a: 'Lectus', b: 'Quis', c: 11}
  ]
};

export {config, data};
