import React, { useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { AiOutlineAppstore, AiOutlineUnorderedList, AiOutlineInfoCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import SideMenu from '../SideMenu'
import type { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { turnOnCardsView, turnOnListView } from '../../features/news/newsSlice'

const Header = () => {

  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isCardViewOn = useSelector((state: RootState) => state.news.newsCardsView)
  const dispatch = useDispatch()
  
  return (
    <Row className='p-2'>
      <Col xs="auto" className="align-self-center">
        <SideMenu/>
      </Col>
      <Col>
        <Link to='/' className="text-decoration-none text-color-black text-reset">
          <h1 className="text-sm-left mt-1">gnNews</h1>
        </Link>
      </Col>
        <Col xs={ 1 } md="auto" className="align-self-center m-2" >
          {isCardViewOn 
          ? 
          (
          <Button variant="outline-secondary" className="rounded-circle p-1 border-0" onClick={(e) => dispatch(turnOnListView())}>
          <IconContext.Provider value={{size: '36px', color: 'black'}}>
            <AiOutlineUnorderedList/>
          </IconContext.Provider> 
        </Button>) 
          : 
          (<Button variant="outline-secondary" className="rounded-circle p-1 border-0" onClick={(e) => dispatch(turnOnCardsView())}>
          <IconContext.Provider value={{size: '36px', color: 'black'}}>
            <AiOutlineAppstore/>
          </IconContext.Provider> 
        </Button>)
        }
        </Col>
        <Col xs={ 2 } md="auto" className="align-self-center m-2">
          <Button variant="outline-secondary" className="rounded-circle p-1 border-0" onClick={handleShow}>
            <IconContext.Provider value={{size: '36px', color: 'black'}}>
              <AiOutlineInfoCircle/>
            </IconContext.Provider> 
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>Like: </Modal.Body>
            <Modal.Body>Dislike: </Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                Okay
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
    </Row>
  )
}

export default Header