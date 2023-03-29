import React from 'react'
import { Button, Col, Nav } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';

const LaungageSwitch = () => {

  const { t, i18n } = useTranslation();

  return (
    <>
    <Col xs="auto" className="mt-2 p-2">
        <Nav>
        <Nav.Item>
            <Nav.Link disabled className='text-black' role="textbox">{t('language')}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Button variant="outline-light" className="p-0 border-0" onClick={() => i18n.changeLanguage("en")}>
            <Nav.Link  className='text-black'>{t('en')}</Nav.Link>
        </Button>
        </Nav.Item>
        <Nav.Item>
        <Button variant="outline-light" className="p-0 border-0" data-testid="button" onClick={() => i18n.changeLanguage("pl")}>
            <Nav.Link className='text-black'>{t('pl')}</Nav.Link>
        </Button>
        </Nav.Item>
        </Nav>
    </Col>
    </>
  )
}

export default LaungageSwitch