import React, { Component } from 'react';

class MultiForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2,
        }

        this.handInputChange = this.handInputChange.bind(this);
        this.handSubmitChange = this.handSubmitChange.bind(this);
        this.input = React.createRef();//Ref
    }

    handInputChange(event) {
        // console.log(event.target);
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    handSubmitChange(event) {
        event.preventDefault();
        // console.log(event.target.isGoing);
        console.log(this.input.current);
        // console.log(this.input)
        this.input.current.focus();
        // alert(this.state.isGoing + ' ' + this.state.numberOfGuests);
    }

    render() {
        console.log(this.input);

        return (
            <form onSubmit={this.handSubmitChange}>
                <label>Is going</label>
                <input

                    type="checkbox"
                    className="form-control"
                    name="isGoing"
                    checked={this.state.isGoing}
                    onChange={this.handInputChange}
                />
                <br />
                <label>Number of guests</label>
                <input
                    type="number"
                    className="form-control"
                    ref={this.input}
                    name="numberOfGuests"
                    value={this.state.numberOfGuests}
                    onChange={this.handInputChange}
                />
                <button type="submit" className="btn btn-success">Save</button>
            </form>
        );
    }
}

export default MultiForm;