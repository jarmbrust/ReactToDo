import React, {Component } from 'react';

/**
* A counter button: tap the button to increase the count.
*/
class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    render() {
        return (
            <div>
                <button onClick={ this.increment }>increment</button>
                <button onClick={ this.decrement }>decrement</button>
                <div className="counter"> Count {this.state.count} </div>
            </div>
        );
    }

    increment(event) {
        this.setState({ count: this.state.count + 1 });
    }
    
    decrement(event) {
        this.setState({ count: this.state.count - 1 });
    }
}

export default Counter;