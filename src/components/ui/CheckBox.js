import React, { Component } from 'react';
import '../../assets/style/CheckBox.css'
class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked, // Store the checkbox state
      previousChecked: this.props.checked // Store the previous state in case of cancel
    };
  }

  handleChange(e) {
    const { checked } = e.target;

    const confirmationDialog = window.confirm("Are you sure you want to mark this task as completed?");

    if (confirmationDialog) {
      this.setState({
        checked: true,
        previousChecked: true 
      });
      this.props.onChange(true); 
    } else {
      this.setState((prevState) => ({
        checked: prevState.previousChecked
      }));
    }
  }

  render() {
    return (
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input
            type="checkbox"
            className="custom-checkbox"
            checked={this.state.checked}
            onChange={this.handleChange.bind(this)}
          />
          <span className="checkbox-text">{this.props.label}</span>
        </label>
      </div>
    );
  }
}

export default CheckBox;
