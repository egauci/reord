/*global Modernizr */
let config = {
  bottomDockHeight: Modernizr.touch ? 60 : 40,
  columns: [
    {label: 'First Name', dkey: 'firstName'},
    {label: 'Last Name', dkey: 'lastName'},
    {label: 'Account Number', dkey: 'accountNumber'}
  ]
};

let data = {
  firstSelected: false,
  lastSelected: false,
  countSelected: 0,
  rows: [
    {
      "accountGroup": "East Coast",
      "accountName": "Suspendisse auctor nibh ut.",
      "accountNumber": "3158461322640",
      "currency": "MXN",
      "firstName": "Joan",
      "lastName": "Fulton",
      "ledgerBalance": {
        "currency": "USD",
        "value": 928396.2397967698,
        "shortFormat": "928,396.24",
        "formatted": "928,396.24 USD"
      },
      "openingBalance": {
        "currency": "SGD",
        "value": 254749.04171675444,
        "shortFormat": "254,749.04",
        "formatted": "254,749.04 SGD"
      },
      "openingDate": {
        "value": "2010-07-24T01:14:30.000Z",
        "formatted": "07/23/2010",
        "days": -1676
      }
    },
    {
      "accountGroup": "Central",
      "accountName": "Mi amet in senectus porta bibendum!",
      "accountNumber": "9345110563543",
      "currency": "CAD",
      "firstName": "Earnest",
      "lastName": "Figueroa",
      "ledgerBalance": {
        "currency": "JPY",
        "value": 707042.2028190224,
        "shortFormat": "707,042.20",
        "formatted": "707,042.20 JPY"
      },
      "openingBalance": {
        "currency": "CAD",
        "value": 714801.6910048667,
        "shortFormat": "714,801.69",
        "formatted": "714,801.69 CAD"
      },
      "openingDate": {
        "value": "2012-12-16T01:14:30.000Z",
        "formatted": "12/15/2012",
        "days": -800
      }
    },
    {
      "accountGroup": "West Coast",
      "accountName": "Porta in convallis libero diam massa.",
      "accountNumber": "6561948882234",
      "currency": "CHF",
      "firstName": "Will",
      "lastName": "Bass",
      "ledgerBalance": {
        "currency": "CHF",
        "value": 395864.9472285528,
        "shortFormat": "395,864.95",
        "formatted": "395,864.95 CHF"
      },
      "openingBalance": {
        "currency": "EUR",
        "value": 459124.0765696857,
        "shortFormat": "459,124.08",
        "formatted": "459,124.08 EUR"
      },
      "openingDate": {
        "value": "2014-11-05T01:14:30.000Z",
        "formatted": "11/04/2014",
        "days": -111
      }
    },
    {
      "accountGroup": "EMEA",
      "accountName": "Quam cras dapibus urna faucibus?",
      "accountNumber": "8255304246723",
      "currency": "SEK",
      "firstName": "Maryann",
      "lastName": "Blackwell",
      "ledgerBalance": {
        "currency": "HKD",
        "value": 596112.7701664576,
        "shortFormat": "596,112.77",
        "formatted": "596,112.77 HKD"
      },
      "openingBalance": {
        "currency": "MXN",
        "value": 712458.6788490647,
        "shortFormat": "712,458.68",
        "formatted": "712,458.68 MXN"
      },
      "openingDate": {
        "value": "2012-01-31T01:14:30.000Z",
        "formatted": "01/30/2012",
        "days": -1120
      }
    },
    {
      "accountGroup": "Central",
      "accountName": "Convallis lorem nam?",
      "accountNumber": "5337511600381",
      "currency": "EUR",
      "firstName": "Benito",
      "lastName": "Henry",
      "ledgerBalance": {
        "currency": "JPY",
        "value": 617879.6279392438,
        "shortFormat": "617,879.63",
        "formatted": "617,879.63 JPY"
      },
      "openingBalance": {
        "currency": "GBP",
        "value": 608059.2179483501,
        "shortFormat": "608,059.22",
        "formatted": "608,059.22 GBP"
      },
      "openingDate": {
        "value": "2014-04-06T01:14:30.000Z",
        "formatted": "04/05/2014",
        "days": -324
      }
    },
    {
      "accountGroup": "West Coast",
      "accountName": "Ut aliquam vitae libero.",
      "accountNumber": "4538292670412",
      "currency": "HKD",
      "firstName": "Eliseo",
      "lastName": "Brewer",
      "ledgerBalance": {
        "currency": "DKK",
        "value": 604538.5849129176,
        "shortFormat": "604,538.58",
        "formatted": "604,538.58 DKK"
      },
      "openingBalance": {
        "currency": "JPY",
        "value": 846849.5156174991,
        "shortFormat": "846,849.52",
        "formatted": "846,849.52 JPY"
      },
      "openingDate": {
        "value": "2013-08-24T01:14:30.000Z",
        "formatted": "08/23/2013",
        "days": -549
      }
    },
    {
      "accountGroup": "Central",
      "accountName": "Neque iaculis massa?",
      "accountNumber": "8803501263453",
      "currency": "CAD",
      "firstName": "Maggie",
      "lastName": "Gregory",
      "ledgerBalance": {
        "currency": "MXN",
        "value": 601764.9834377225,
        "shortFormat": "601,764.98",
        "formatted": "601,764.98 MXN"
      },
      "openingBalance": {
        "currency": "SGD",
        "value": 441083.8602720294,
        "shortFormat": "441,083.86",
        "formatted": "441,083.86 SGD"
      },
      "openingDate": {
        "value": "2010-11-24T01:14:30.000Z",
        "formatted": "11/23/2010",
        "days": -1553
      }
    },
    {
      "accountGroup": "EMEA",
      "accountName": "Fames in ipsum turpis?",
      "accountNumber": "2268531529854",
      "currency": "DKK",
      "firstName": "Solomon",
      "lastName": "Salazar",
      "ledgerBalance": {
        "currency": "AUD",
        "value": 493005.5849767756,
        "shortFormat": "493,005.58",
        "formatted": "493,005.58 AUD"
      },
      "openingBalance": {
        "currency": "DKK",
        "value": 272010.07785294205,
        "shortFormat": "272,010.08",
        "formatted": "272,010.08 DKK"
      },
      "openingDate": {
        "value": "2013-02-01T01:14:30.000Z",
        "formatted": "01/31/2013",
        "days": -753
      }
    }
  ]
};

export {config, data};
