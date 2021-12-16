//create cart component to display cart items and total price of cart items in cart page add cart to main page
import React, { Component } from 'react';

class Cart extends React.Component {
    state = {
        cart: [],
        total: 0

    }
    
    componentDidMount() {
        this.setState({
            cart: this.props.cart,
            total: this.props.total
        })
    }


    render() { 
        return <div>
            <h1>Cart</h1>

            <div className="cart">
                <div className="cart-items">
                    <h3>Cart Items</h3>
                    <ul>
                        {this.state.cart.map(item => <li>{item.name}</li>)}
                    </ul>
                </div>
                <div className="cart-total">
                    <h3>Total</h3>
                    <p>${this.state.total}</p>
                </div>
            </div>
        </div>;
    }
}
 
export default Cart;