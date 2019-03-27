import React from 'react'
import { Col, Row } from 'antd'
import Utils from './../../utils/Utils'
import './index.less'
import axios from './../../axios'
class Header extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username:'fengliqiang',
      sysTime:'',
      weatherData:''
    }

  }

  componentWillMount () {
    setInterval(()=>{
      const time =  Utils.dataFormat(new Date().getTime())
      this.setState({
        sysTime: time,

      })
    })

    this.getWeather();
  }

  getWeather(){
   // let city = '北京';
    axios.jsonP({
      url:'https://restapi.amap.com/v3/weather/weatherInfo?city=110101&key=69d934070db8ee099d92b0ce6a3f6150'
    }).then((res)=>{
      if (res.status === '1'){
        let temp = res.lives[0];
        this.setState({
          weatherData: temp.weather
        })
      }
    })
  }
  render () {
    return (
      <div >
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎，{this.state.username}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row >
          <Col span={4}>
            首页
          </Col>
          <Col span={20}>
            <span className="time">{this.state.sysTime}</span>
            <span className="weather"> {this.state.weatherData}</span>
          </Col>
        </Row>
      </div>
    )
  }
}

Header.propTypes = {}

export default Header