import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import { countries } from '../../data/coutries'
import { fetchNews } from '../../features/newsSlice'
import { useAppDispatch } from '../../hooks'
import Cards from './Cards'

type MainParams = {
  country_code: string
}

const News = () => {

  const { country_code } = useParams<MainParams>()
  const country: string | undefined = countries.find( el => el.code === country_code)?.name
  const dispatch = useAppDispatch()
 

  useEffect(() => {
    dispatch(fetchNews(country_code))
  }, [country_code, dispatch])
  

  return (
    <>
    <Row className='p-2'>
      <Col>
        <h5>{country} News</h5>
      </Col>
    </Row>
    <Row xs={1} md={3} className='g-4 p-2 flex-1'>
      <Cards/>
    </Row>
    </>
  )
}

export default News