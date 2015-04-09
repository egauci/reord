import React from 'react';

class BottomDock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let ht = {height: `${this.props.height}px`};
    return (
      <div style={ht}>
        BottomDock
      </div>
    );
  }

}

BottomDock.displayName = 'BottomDock';

BottomDock.propTypes = {
  height: React.PropTypes.number.isRequired
};

export default BottomDock;
