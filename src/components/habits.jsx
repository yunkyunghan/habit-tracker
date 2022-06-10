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
        const _habits = [...this.state.habits];
        const index = _habits.indexOf(habit);

        _habits[index].count++;
        this.setState( { habits: _habits } ); // key, value 값이 같으면 key값만 써줘도 무방.
    };

    handleDecrement = (habit) => {
        const _habits = [...this.state.habits];
        const index = _habits.indexOf(habit);
        const count = _habits[index].count - 1;

        _habits[index].count = count < 0 ? 0 : count;   
        this.setState( { habits: _habits } );
    };

    handleDelete = (habit) => {
        const _habits = this.state.habits.filter(item => item.id !== habit.id);

        this.setState( {habits: _habits } );
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
