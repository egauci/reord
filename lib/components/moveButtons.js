import React from 'react';

class MoveButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let firstDis = this.props.firstSelected || !this.props.anySelected,
        lastDis = this.props.lastSelected || !this.props.anySelected;
    return (
      <div className="moveButtonsBar">
        <button
          className="moveTop"
          disabled={firstDis}
          onClick={this.buttonClicked.bind(this, 'moveTop')}
         />
        <button
          className="moveUp"
          disabled={firstDis}
          onClick={this.buttonClicked.bind(this, 'moveUp')}
         />
        <button
          className="moveDown"
          disabled={lastDis}
          onClick={this.buttonClicked.bind(this, 'moveDown')}
         />
        <button
          className="moveBottom"
          disabled={lastDis}
          onClick={this.buttonClicked.bind(this, 'moveBottom')}
         />
      </div>
    );
  }

  buttonClicked(theButton) {
    console.log(theButton);
  }
}

MoveButtons.displayName = 'MoveButtons';

MoveButtons.propTypes = {
  firstSelected: React.PropTypes.bool,
  lastSelected: React.PropTypes.bool,
  anySelected: React.PropTypes.bool
};

MoveButtons.getDefaultProps = {
  firstSelected: false,
  lastSelected: false,
  anySelected: false
};

export default MoveButtons;
