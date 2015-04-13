import React from 'react';

class TableRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr
        className={this.props.row.selected ? 'selected' : null}
        onClick={this.clicked.bind(this)}
      >
        {
          this.props.columns.map((itm, ix) => {
            return (<td key={ix}>{this.props.row[itm.dkey]}</td>);
          })
        }
      </tr>
    );
  }

  clicked() {
    this.props.selChange(this.props.pos);
  }
}

TableRow.displayName = 'TableRow';

TableRow.propTypes = {
  row: React.PropTypes.object.isRequired,
  selChange: React.PropTypes.func.isRequired,
  columns: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  pos: React.PropTypes.number.isRequired
};

export default TableRow;
