import React from 'react';

class BottomDock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let ht = {height: `${this.props.height}px`};
    return (
      <div style={ht}>
      {this.props.children}
      </div>
    );
  }

}

BottomDock.displayName = 'BottomDock';

BottomDock.propTypes = {
  height: React.PropTypes.number.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element
  ])
};

export default BottomDock;
