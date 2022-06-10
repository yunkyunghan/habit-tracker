import React, { Component } from 'react'

class Habit extends Component {
    handleIncrement = () => {
        this.props.onIncrement(this.props.habitt);
    };

    handleDecrement = () => {
        this.props.onDecrement(this.props.habitt);
    };

    handleDelete = () => {
        this.props.onDelete(this.props.habitt);
    };

    render() {
        const { name, count } = this.props.habitt;

        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>

                <button 
                    className="habit-button habit-increase" 
                    onClick={this.handleIncrement}
                >
                    <i className="fa-solid fa-plus"></i>
                </button>

                <button 
                    className="habit-button habit-decrease"
                    onClick={this.handleDecrement}
                >
                    <i className="fa-solid fa-minus"></i>
                </button>

                <button 
                    className="habit-button habit-delete"
                    onClick={this.handleDelete}
                >
                    <i className="fa-solid fa-trash"></i>
                </button>

            </li>
            ); 
        }
}

export default Habit;
