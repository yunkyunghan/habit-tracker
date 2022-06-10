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

    render() {
        return (
            <ul>
                {
                    this.state.habits.map(myHabit => (
                        <Habit key={myHabit.id} habitt={myHabit}/>
                    ))
                }
            
            </ul>
        )
    }
}

export default Habits;
