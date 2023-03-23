import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container';
import { useAppSelector } from '../../hooks';

const Footer = () => {

  const [time, setTime] = useState<String>(new Date().toLocaleString(navigator.language, {
    hour: '2-digit',
    minute:'2-digit',
    second:'2-digit'
  }));
  
  const articlesNumber = useAppSelector((state) => state.news.news?.length)

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
        <Row className="border-top pt-3 bg-secondary text-white">
          <Col>
            Current time: {time}
          </Col>
          <Col>
            <p className="text-end">No. of articles: {articlesNumber}</p>
          </Col>
        </Row>
        <Row className="border-top border-secondary bg-dark text-white">
          <Col>
            <p className="text-center pt-3"> ©2023 Copyright: gnNews</p>
          </Col>
        </Row>
    </Container>
  )
}

export default Footer