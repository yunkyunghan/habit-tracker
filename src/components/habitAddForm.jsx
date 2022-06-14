import React, { PureComponent } from 'react'

class HabitAddForm extends PureComponent {
    inputRef = React.createRef();

    onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name); 
        this.inputRef.current.value ='';
    };

    render() {
        console.log("HabitAddForm")
        return (
        <form className="add-form" onSubmit={this.onSubmit}>
            <input 
                ref={this.inputRef}
                type="text" 
                className="add-input" 
                placeholder="습관을 입력해주세요" 
            />
            <button className="add-button">Add</button>
        </form>

        )
    }
}
export default HabitAddForm
