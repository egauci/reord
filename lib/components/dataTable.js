import React from 'react';
import TableRow from './tableRow';

class DataTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="selTable">
        <thead>
          <tr>
            {this.props.columns.map((itm, ix) => <th key={ix}>{itm.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {
            this.props.rows.map((row, ix) => {
              return (
                <TableRow
                  key={ix}
                  pos={ix}
                  row={row}
                  columns={this.props.columns}
                  selChange={this.props.selChange} />
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

DataTable.displayName = 'DataTable';

DataTable.propTypes = {
  columns: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  rows: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  selChange: React.PropTypes.func.isRequired
};

export default DataTable;
