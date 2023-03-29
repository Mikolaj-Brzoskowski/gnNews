import React, { useEffect, useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { useAppSelector } from '../../hooks/index';
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const [time, setTime] = useState<String>(new Date().toLocaleString(navigator.language, {
    hour: '2-digit',
    minute:'2-digit',
    second:'2-digit'
  }));
  
  const articlesNumber = useAppSelector((state) => state.news.news?.length)
  const { t } = useTranslation();

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
          <Col>{t('time')} {time}</Col>
          <Col><p className="text-end">{t('articles')} {articlesNumber}</p></Col>
        </Row>
        <Row className="border-top border-secondary bg-dark text-white pt-3">
          <Col className="mt-auto"><p className="text-center pt-2"> ©2023 Copyright: gnNews</p></Col>
        </Row>
    </Container>
  )
}

export default Footer