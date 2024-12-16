import React, { Component } from 'react';
import Swal from 'sweetalert2';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked, // Tracks the actual state of the checkbox
        };
    }

    handleCheckboxClick = (e) => {
        const { checked } = e.target;

        Swal.fire({
            title: `Are you sure you want to mark this task as ${checked ? 'Completed' : 'Pending'}?`,
            showDenyButton: true,
            confirmButtonText: "Confirm",
            denyButtonText: "Cancel",
            allowOutsideClick: false,
        }).then((result) => {
            if (result.isConfirmed) {
                // Update the checkbox state and notify the parent
                this.setState({ checked }, () => {
                    this.props.onChange(checked);
                });
                Swal.fire("Updated!", `Task marked as ${checked ? 'Completed' : 'Pending'}.`, "success");
            } else if (result.isDenied) {
                // Reset the checkbox state to the previous state
                this.setState({ checked: !checked });
            }
        });
    };

    render() {
        const { checked } = this.state;

        return (
            <div className="checkbox-container">
                {/* Checkbox */}
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={this.handleCheckboxClick}
                />
            </div>
        );
    }
}

export default CheckBox;
