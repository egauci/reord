import React from 'react';

class ShowSelected extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span>{String(this.props.countSelected)} </span>
        <span>items selected</span>
      </div>
    );
  }
}

ShowSelected.displayName = 'ShowSelected';
ShowSelected.propTypes = {
  countSelected: React.PropTypes.number.isRequired
};

export default ShowSelected;
