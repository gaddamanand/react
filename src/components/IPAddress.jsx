import React, { Component } from 'react';
import '../css/ipaddress.css';

class IpAddress extends Component {
    // show ip  with ipjson api call

    constructor(props) {
        super(props);
        this.state = {
            ip: '',
            isLoading: true
        };
    }

    componentDidMount() {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    ip: data.ip,
                    isLoading: false
                });
            });
    }

    render() { 
        return <div>
            <h1>IP Address</h1>
           <h2> {this.state.isLoading ? <p>Loading...</p> : <p>{this.state.ip}</p>}</h2>
            <p>This might be your ip :)</p>

        </div>;
    }
}
 
export default IpAddress;