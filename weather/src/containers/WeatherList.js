import React, { Component } from 'react'
import { Sparklines,SparklinesLine } from 'react-sparklines';
import { connect } from "react-redux";

export class WeatherList extends Component {

    renderWeather(cityData)
    {
        
        console.log(cityData);
        const temp=cityData.list.map((weather)=>weather.main.temp)
        const humidity=cityData.list.map((weather)=>weather.main.humidity)
        const pressure=cityData.list.map((weather)=>weather.main.pressure)
      
        return (
            <tr key={cityData.city.name}>
                <td>{cityData.city.name}</td>
                <td>
                    <Sparklines data={temp} width={180} height={120}>
                        <SparklinesLine color="red" />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines data={pressure} width={180} height={120}>
                        <SparklinesLine color="blue" />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines data={humidity} width={180} height={120}>
                        <SparklinesLine color="green" />
                    </Sparklines>
                </td>
            </tr>
        );
    }


    render() {
        console.log(this.props)
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature</th>
                            <th>Pressure</th>   
                            <th>Humidity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weathers.map((weather)=>this.renderWeather(weather))}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log(state);
    return {weathers:state.weatherReducer}
}

export default connect(mapStateToProps)(WeatherList)
