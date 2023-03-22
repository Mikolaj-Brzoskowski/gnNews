import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { lorem_ipsum } from '../../data/lorem_ipsum'
import { useParams } from "react-router-dom"
import { countries } from '../../data/coutries'

type MainParams = {
  country_code: string
}

const News = () => {

  const { country_code } = useParams<MainParams>()
  const country: string | undefined = countries.find( el => el.code === country_code)?.name

  return (
    <>
    <Row className='p-2'>
      <Col>
        <h5>{country} News</h5>
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

export default News