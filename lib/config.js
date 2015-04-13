/*global Modernizr */
let config = {
  bottomDockHeight: Modernizr.touch ? 60 : 40
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
    {a: 'Lectus', b: 'Quis', c: 11}
  ]
};

export {config, data};
