import React, { Component } from 'react';
import './styles1.css';
class EmployeeExpenseForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            reason: '',
            fee: '',
            time: '',
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission logic here, e.g., send data to a server or update a state.
        // For now, we'll just log the form data.
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <h2>Employee Expense Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>


                    <div>
                        <label>Time</label>
                        <input
                            type="datetime-local"
                            name="time"
                            value={this.state.time}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>


                    <div>
                        <label>Fee</label>
                        <div className="currency-input">
                            <input
                                type="text"
                                name="fee"
                                value={this.state.fee}
                                onChange={this.handleInputChange}
                                required
                                pattern="^\d+(,\d{3})*(\.\d{1,2})?$"
                                title="Please enter a valid VND amount (e.g., 1,000,000.00)"
                                className="custom-input"
                            />
                           
                        </div>
                    </div>

                    <div>
                        <label>Reason</label>
                        <input
                            type="text"
                            name="reason"
                            value={this.state.reason}
                            onChange={this.handleInputChange}
                            required
                            className="reason-input"
                        />
                    </div>




                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default EmployeeExpenseForm;
