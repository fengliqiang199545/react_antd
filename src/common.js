import React from 'react'
import { Col, Row } from 'antd'
import 'antd/dist/antd.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import './style/common.less'
import Home from './pages/home'
class Common extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

  }

  render () {
    return (
      <div>
      <Row className="container">
          <Header/>
      </Row>
      <Row>
        {this.props.children}
      </Row>

      </div>
    )
  }
}

Common.propTypes = {}

export default Common