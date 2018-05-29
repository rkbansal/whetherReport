import React, { Component } from 'react';
class City extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            name : props.name,
            apiKey : '85539b010c7e51ded840105dfbfea0aa'
        }
    }

    onSelect=(name)=>{
        this.props.onSelect(name);
    }

  render() {
    return (
      <div className='city-card' onClick={()=>{this.onSelect(this.state.name)}}>
        <a >
            {this.state.name.toUpperCase()}
        </a>
      </div>
    );
  }
}

export default City;
