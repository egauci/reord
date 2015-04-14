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
    {a: 'Ullamcorper', b: 'Odio', c: '1'},
    {a: 'Et', b: 'Eget', c: '2'},
    {a: 'Amet', b: 'A', c: '3'},
    {a: 'Donec', b: 'Pede', c: '4'},
    {a: 'Velit', b: 'Non', c: '5'},
    {a: 'Sodales', b: 'Nullam', c: '6'},
    {a: 'Aliquam', b: 'Sed', c: '7'},
    {a: 'Nam', b: 'Habitant', c: '8'},
    {a: 'Lectus', b: 'Pellentesque', c: '9'},
    {a: 'Quis', b: 'Ornare', c: '10'},
    {a: 'Lectus', b: 'Quis', c: 11},
    {a: 'Viverra', b: 'Eros', c: 12},
    {a: 'Tincidunt', b: 'Felis', c: 13},
    {a: 'Pellentesque', b: 'Aenean', c: 14},
    {a: 'Etiam', b: 'Mauris', c: 15},
    {a: 'Curae', b: 'Scelerisque', c: 16},
    {a: 'Duis', b: 'fringilla', c: 17},
    {a: 'Aliquam', b: 'Porta', c: 18}
  ]
};

export {config, data};
