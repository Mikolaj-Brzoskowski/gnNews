import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { lorem_ipsum } from '../../data/lorem_ipsum'

const Home = () => {

  return (
    <>
    <Row className='p-2'>
      <Col>
        <h5>Home Page</h5>
      </Col>
    </Row>
    <Row className='p-2'>
      <Col>
        <p>{lorem_ipsum}</p>
      </Col>
    </Row>
    </>
  )
}

export default Home