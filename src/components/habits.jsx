import React, { Component } from 'react'
import Habit from './habit';

class Habits extends Component {

    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    };

    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    };

    handleDelete = (habit) => {
        this.props.onDelete(habit);
    };

    render() {
        return (
            <ul>
                {this.props.habits.map(myHabit => (
                        <Habit 
                            key={myHabit.id} 
                            habitt={myHabit} 
                            onIncrement={this.handleIncrement} 
                            onDecrement={this.handleDecrement} 
                            onDelete={this.handleDelete} 
                        />
                    ))}
            </ul>
        )
    }
}

export default Habits;
