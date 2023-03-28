import React, { useEffect, useState } from 'react'
import { Col, Nav, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container';
import { useAppSelector } from '../../hooks';
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const [time, setTime] = useState<String>(new Date().toLocaleString(navigator.language, {
    hour: '2-digit',
    minute:'2-digit',
    second:'2-digit'
  }));
  
  const articlesNumber = useAppSelector((state) => state.news.news?.length)
  const { t, i18n } = useTranslation();

  useEffect(() => {
    let secTimer = setInterval( () => {
      setTime(new Date().toLocaleString(navigator.language, {
        hour: '2-digit',
        minute:'2-digit',
        second:'2-digit'
      }))
    },1000)

    return () => clearInterval(secTimer);
  }, []);


  return (
    <Container className="mt-auto">
        <Row className="pt-3 bg-secondary text-white rounded-top">
          <Col>
          {t('time')} {time}
          </Col>
          <Col>
            <p className="text-end">{t('articles')} {articlesNumber}</p>
          </Col>
        </Row>
        <Row className="border-top border-secondary bg-dark text-white pt-3">
          <Col xs={7}>
            <Nav>
              <Nav.Item>
                <Nav.Link disabled className="text-white">{t('language')}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link className="text-white" onClick={() => i18n.changeLanguage("en")}>{t('en')}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-white" onClick={() => i18n.changeLanguage("pl")}>{t('pl')}</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col xs={5} className="mt-auto">
            <p className="text-end pt-2"> ©2023 Copyright: gnNews</p>
          </Col>
        </Row>
    </Container>
  )
}

export default Footer