import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';
import React, { Component } from 'react';

class App extends Component {
  state = {
    habits: [
        {id: 1, name: 'Coding', count: 0},
        {id: 2, name: 'Drinking Coffee', count: 0},
        {id: 3, name: 'Working out', count: 0}
    ]
};

handleIncrement = (habit) => {
  const _habits = this.state.habits.map(item => {
    if (item.id === habit.id) {
        return {...habit, count: habit.count + 1}
    } 
    return item;
  })
  this.setState( { habits: _habits } ); // key, value 값이 같으면 key값만 써줘도 무방.
};

handleDecrement = (habit) => {
  const _habits = this.state.habits.map(item => {
    if (item.id === habit.id) {
      const count = habit.count - 1;
      return {...habit, count: count < 0 ? 0 : count}
    }
    return item;
  })
  this.setState( { habits: _habits } );
};

handleDelete = (habit) => {
  const _habits = this.state.habits.filter(item => item.id !== habit.id);
  this.setState( { habits: _habits } );
};

handleAdd =(name) => {
  const _habits = [...this.state.habits, { id:Date.now(), name: name, count:0 }]
  this.setState( { habits: _habits } );
};

handleReset =() => {
  const _habits = this.state.habits.map(myHabit => {
      if (myHabit.count !== 0) {
        return {...myHabit, count:0}
      }
      return myHabit;
  });
  this.setState( { habits: _habits } );
}

  render() {
    console.log("app")
    return (
      <div>
        <Navbar 
          totalCount={this.state.habits.filter(item => item.count > 0).length}
        />
        <Habits 
        habits = {this.state.habits} 
        onIncrement={this.handleIncrement} 
        onDecrement={this.handleDecrement} 
        onDelete={this.handleDelete}  
        onAdd={this.handleAdd}
        onReset={this.handleReset} 
      />
      </div>
    );
  }
}

export default App;


