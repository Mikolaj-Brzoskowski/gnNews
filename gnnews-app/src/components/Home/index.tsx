import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { lorem_ipsum } from '../../data/lorem_ipsum'
import { useParams } from "react-router-dom"

type MainParams = {
  country_code: string
}

const Home = () => {

  const { country_code } = useParams<MainParams>()


  return (
    <>
    <Row className='p-2'>
      <h5>{country_code}</h5>
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