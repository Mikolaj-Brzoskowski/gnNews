import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { useAppSelector } from '../../../hooks'

const Cards = () => {

const news = useAppSelector((state) => state.news.news)

return (
    <>
        {news?.map((news, idx) => (
        <Col key={idx}>
            <Card className='h-100'>
            {news.urlToImage ?
            (<Card.Img variant="top" src={`${news.urlToImage}`} /> ) :
            null
            }   
                <Card.Body className='d-flex flex-column'>
                <Card.Title className='mb-auto'>{news.title.replace(` - ${news.author}` || '','')}</Card.Title>
                <Card.Text>
                    {news.content}
                </Card.Text>
                <Card.Text>
                    Source: {news.author}
                </Card.Text>
                <Card.Text className='justify-'>
                    Published at: {new Date(news.publishedAt).toLocaleString()}
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        ))}
    </>
)}

export default Cards