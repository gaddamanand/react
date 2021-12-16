//create button component with props and state 
import React, { Component } from 'react';

class Button extends React.Component {
    state = { 
        text: 'Click me'
     }

    handleClick = () => {
        this.setState({
            text: 'Thanks for clicking me'
        })
    }

    render() { 
        return <div>
            <button onClick={this.handleClick}>{this.state.text}</button>
        </div>;
    }
}
 
export default Button;