import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useParams } from "react-router-dom"
import { countries } from '../../data/coutries'
import { fetchNews } from '../../features/newsSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'
import Cards from './Cards'
import List from './List'

type MainParams = {
  country_code: string
}

const News = () => {

  const { country_code } = useParams<MainParams>()
  const country: string | undefined = countries.find( el => el.code === country_code)?.name
  const dispatch = useAppDispatch()
  const isCardView = useAppSelector((state) => state.news.newsCardsView)
  const { t } = useTranslation() 

  useEffect(() => {
    dispatch(fetchNews(country_code))
  }, [country_code, dispatch])
  

  return (
    <>
      <Row className='p-2'>
        <Col>
          <h5>{country} {t('news')}</h5>
        </Col>
      </Row>
      <Row xs={1} md={3} className='g-4 p-2 flex-1 bg-info-subtle'>
        {isCardView ? (<Cards/>) : <List/>}
      </Row>
    </>
  )
}

export default News