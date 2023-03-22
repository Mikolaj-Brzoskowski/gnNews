import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SideMenu from '../SideMenu'

const Header = () => {
  return (
    <Row className='p-2'>
      <Col xs="auto" className="align-self-center">
        <SideMenu/>
      </Col>
      <Col>
        <h1 className="text-sm-left">gnNews</h1>
      </Col>
    </Row>
  )
}

export default Header