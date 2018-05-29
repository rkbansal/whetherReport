import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import City from './city.js';
import Output from './output.js';
import * as ApiService from './api.js';

class App extends Component {

  constructor(props)
  {
    super(props);
    // this. = ;
    this.state={
      cities:['delhi','bangalore','london'],
      selected: 'delhi',
      apiKey : '85539b010c7e51ded840105dfbfea0aa'      
    }
  }

  onSelect= selected=>{
    const url = 'http://api.openweathermap.org/data/2.5/weather?q='+selected+'&appid='+this.state.apiKey
    ApiService.get(url,(err,details)=>{
      if(err){
        alert(`Error: ${err.message}`)
      }else{
        this.setState({selected, details});    
      }
    })
  }

  getCityList=()=>
  {
    const cityList = this.state.cities.map((city, indx)=>{
      return <City name={city} onSelect={this.onSelect} key={indx}></City>
    });
    return cityList;
  }

  render() {
    return (
      <div className="App">
        <div className='city-list'>
        {
          this.getCityList()
        }
        </div>
        <div className='city-details-container' >
            <Output selected={this.state.selected} details={this.state.details} />
        </div>
      </div>
    );
  }
}

export default App;
