import React, { Component } from 'react'
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            {id: 1, name: 'Coding', count: 0},
            {id: 2, name: 'Drinking Coffee', count: 0},
            {id: 3, name: 'Working out', count: 0}
        ]
    };

    handleIncrement = (habit) => {
        console.log(`handleIncrement ${habit.name}`)
    };

    handleDecrement = (habit) => {
        console.log(`handleDecrement ${habit.name}`)
    };

    handleDelete = (habit) => {
        console.log(`handleDelete ${habit.name}`)
    };

    render() {
        return (
            <ul>
                {
                    this.state.habits.map(myHabit => (
                        <Habit 
                            key={myHabit.id} 
                            habitt={myHabit} 
                            onIncrement={this.handleIncrement} 
                            onDecrement={this.handleDecrement} 
                            onDelete={this.handleDelete} 
                        />
                    ))
                }
            </ul>
        )
    }
}

export default Habits;
