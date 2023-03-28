import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { useAppSelector } from '../../../hooks'
import NewsModal from '../NewsModal'
import { useTranslation } from 'react-i18next';

const Cards = () => {

const news = useAppSelector((state) => state.news.news)

const [modalShow, setModalShow] = React.useState(false);
const [modalId, setmodalId] = React.useState(-1);
const { t } = useTranslation()

const handleClick = (idx: number, showMode: boolean) => {
    if (showMode) {
        setmodalId(-1)
        setModalShow(!modalShow)
    }
    if (!showMode) {
        setmodalId(idx)
        setModalShow(!modalShow)
    }
}

return (
    <>
        {news?.map((el, idx) => (
        <Col key={idx}>
            <Card className='h-100' onClick={() => handleClick(idx, modalShow)} >
            {el.urlToImage ?
            (<Card.Img variant="top" src={`${el.urlToImage}`} /> ) :
            null
            }   
                <Card.Body className='d-flex flex-column'>
                <Card.Title className='mb-auto'>{el.title}</Card.Title>
                <Card.Text>
                    {el.description}
                </Card.Text>
                <Card.Text>
                {t('source')} {el.source.name}
                </Card.Text>
                <Card.Text className='justify-'>
                {t('publish')} {new Date(el.publishedAt).toLocaleString()}
                </Card.Text>
                </Card.Body>
                <NewsModal
                    show={modalShow}
                    onHide={() => handleClick(idx, modalShow)}
                    news={el}
                    modalkey={idx}
                    modalid={modalId}
                />
            </Card>
        </Col>
        ))}
    </>
)}

export default Cards