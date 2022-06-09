import React, { Component } from 'react'
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            {name: 'Coding', count: 0},
            {name: 'Coffee', count: 0},
            {name: 'Reading', count: 0}
        ]
    };

    render() {
        return (
            <ul>
                {
                    this.state.habits.map(habit => (
                        <Habit habit={habit}/>
                    ))
                }
            
            </ul>
        )
    }
}

export default Habits;
