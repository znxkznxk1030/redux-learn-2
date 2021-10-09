import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Sparklines, SparklinesLine } from 'react-sparklines'

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temperatures = cityData.list.map((weather) => weather.main.temp)
    const pressures = cityData.list.map((weather) => weather.main.pressure)
    const humidity = cityData.list.map((weather) => weather.main.humidity)

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines data={temperatures} height={120} width={180}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
        <td>
          <Sparklines data={pressures} height={120} width={180}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
        <td>
          <Sparklines data={humidity} height={120} width={180}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
      </tr>
    )
  }

  render() {
    console.log(this.props.weather)
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

function mapDispathToProps() {}

export default connect(mapStateToProps, null)(WeatherList)
