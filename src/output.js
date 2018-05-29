import React, { Component } from 'react';
class Output extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            selected : props.selected,
        }
    }

    render() {
        const { details }  = this.props;
    return (
      <div className='city-details-card'>
        {
            details?<div>
                <h2>
                    {details.name}
                </h2>
                <h3>
                {                    
                    details.weather.map(d=>d.main).join(', ')
                }
                </h3>
                <h3>
                    {
                        'Temp: '+details.main.temp.toString()
                    }
                </h3>
                <h3>
                    {
                        'Pressure: '+details.main.pressure.toString()
                    }
                </h3>
                <h3>
                    {
                        'Min Temp: '+details.main.temp_min.toString()
                    }
                </h3>
                <h3>
                    {
                        'Max Temp: '+details.main.temp_max.toString()
                    }
                </h3>
                <h3>
                    {
                        'Visibility: '+details.visibility.toString()
                    }
                </h3>
            </div>:<div>Whether Conditions</div>
        }
      </div>
    );
  }
}

export default Output;
