import React from 'react'
import { Col, Row } from 'antd'
import 'antd/dist/antd.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import './style/common.less'
import Home from './pages/home'
class Admin extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

  }

  render () {
    return (
      <Row className="container">
        <Col span={3} className="nav-left">
          <Navigation/>
        </Col>
        <Col span={21} className="main">
          <Header>

          </Header>
          <Row className="content">
              {this.props.children}
          </Row>
          <Footer>

          </Footer>
        </Col>
      </Row>
    )
  }
}

Admin.propTypes = {}

export default Admin