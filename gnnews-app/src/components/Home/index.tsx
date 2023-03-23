import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import { lorem_ipsum } from '../../data/lorem_ipsum'
import { clearNews } from '../../features/newsSlice'

const Home = () => {

  const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearNews())
    }, [])

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