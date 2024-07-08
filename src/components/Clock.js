import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}; /** State: A Component's Memory */
        this.timerID = 0;
    }

    tick() {
        /** this.setState() to schedule updates to the component local state */
        this.setState({
            date: new Date()
        });
    }
    
    /** The componentDidMount() method runs after the component output has been rendered to the DOM.  */
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    /** The componentWillUnmount()  cleaning up any subscriptions that were created in componentDidMount() */
    componentWillUnmount() {
        clearInterval(this.timerID); 
    } 

    render() { 
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
 
export default Clock;