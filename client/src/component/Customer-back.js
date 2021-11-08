import React from "react";

class Customer extends React.Component {
    render() {
        return (
            /* 2개의 컴포넌트 구성 jsx */
            <div> 
                <CustomerProfile id={this.props.id} name={this.props.name} image={this.props.image} />
                <CustomerInfo name={this.props.name} birthday={this.props.birthday} jop={this.props.jop} />
            </div>
        )
    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.jop}</p>
            </div>
        )
    }
}


export default Customer;