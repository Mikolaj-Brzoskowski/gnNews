import React from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import { useAppSelector } from '../../../hooks'
import NewsModal from '../NewsModal'

const List = () => {

  const news = useAppSelector((state) => state.news.news)

  const [modalShow, setModalShow] = React.useState(false);
  const [modalId, setmodalId] = React.useState(-1);

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
    <ListGroup className="w-100 p-2">
      {news?.map((el, idx) => (
        <ListGroup.Item
        className="d-flex justify-content-between align-items-start"
        key={idx}
        onClick={() => handleClick(idx, modalShow)}
        action
        >
        <div className="ms-2 me-auto w-100">
          <div className="fw-bold">{el.title}</div>
          <Container>
          <Row className="mt-2">
            <Col xs={12} md={9}> Source: {el.source.name}</Col>
            <Col xs={12} md={3}>Published at: {new Date(el.publishedAt).toLocaleString()}</Col>
          </Row>
          </Container>
        </div>
        <NewsModal
          show={modalShow}
          onHide={() => handleClick(idx, modalShow)}
          news={el}
          modalkey={idx}
          modalid={modalId}
      />
      </ListGroup.Item>
      ))}
  </ListGroup>
  )
}

export default List