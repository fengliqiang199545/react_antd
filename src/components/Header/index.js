import React from 'react'
import { Col, Row } from 'antd'
import Utils from './../../utils/Utils'
import './index.less'
class Header extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username:'fengliqiang',
      sysTime:''
    }

  }

  componentWillMount () {
    setInterval(()=>{
      const time =  Utils.dataFormat(new Date().getTime())
      this.setState({
        sysTime: time
      })
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
            <span className="weather"> 请转多云</span>
          </Col>
        </Row>
      </div>
    )
  }
}

Header.propTypes = {}

export default Header