import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SideMenu from './SideMenu'
import HeaderButtons from './HeaderButtons'
import LaungageSwitch from './LaungaugeSwitch';

const Header = () => {
  
  return (
    <>
      <Row className='p-2'>
        <SideMenu/>
        <Col xs="auto" className="mt-2">
          <Link to='/' className="text-decoration-none text-color-black text-reset">
            <h1 className="text-sm-left mt-1">gnNews</h1>
          </Link>
        </Col>
        <Col xs={1} md={4}/>
          <HeaderButtons/>
      {/* Laungage switch */}
          <LaungageSwitch/>
      </Row>
    </>
  )
}

export default Header