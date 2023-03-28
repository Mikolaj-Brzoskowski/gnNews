import React from 'react'
import { Button, Col, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SideMenu from '../SideMenu'
import { useTranslation } from 'react-i18next';
import HeaderButtons from './HeaderButtons'

const Header = () => {

  const { t, i18n } = useTranslation();
  
  return (
    <Row className='p-2'>
      <Col xs="auto" className="align-self-center">
        <SideMenu/>
      </Col>
      <Col xs="auto" className="mt-2">
        <Link to='/' className="text-decoration-none text-color-black text-reset">
          <h1 className="text-sm-left mt-1">gnNews</h1>
        </Link>
      </Col>
      <Col xs={1} md={4}/>
        <HeaderButtons/>
    {/* Laungage switch */}
        <Col xs="auto" className="mt-2 p-2">
            <Nav>
              <Nav.Item>
                <Nav.Link disabled className='text-black'>{t('language')}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Button variant="outline-light" className="p-0 border-0">
                <Nav.Link onClick={() => i18n.changeLanguage("en")} className='text-black'>{t('en')}</Nav.Link>
              </Button>
              </Nav.Item>
              <Nav.Item>
              <Button variant="outline-light" className="p-0 border-0">
                <Nav.Link onClick={() => i18n.changeLanguage("pl")} className='text-black'>{t('pl')}</Nav.Link>
              </Button>
              </Nav.Item>
            </Nav>
          </Col>
    </Row>
  )
}

export default Header