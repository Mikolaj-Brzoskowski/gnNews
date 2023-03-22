import React, { useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { GrCircleInformation, GrList, GrAppsRounded } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import SideMenu from '../SideMenu'

const Header = () => {

  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
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
          <Button variant="outline-secondary" className="rounded-circle p-1 border-0">
            <IconContext.Provider value={{size: '24px'}}>
              <GrAppsRounded/>
            </IconContext.Provider> 
          </Button>
        </Col>
        <Col xs={ 1 } md="auto" className="align-self-center m-2">
          <Button variant="outline-secondary" className="rounded-circle p-1 border-0">
            <IconContext.Provider value={{size: '24px'}}>
              <GrList/>
            </IconContext.Provider> 
          </Button>
        </Col>
        <Col xs={ 1 } md="auto" className="align-self-center m-2">
          <Button variant="outline-secondary" className="rounded-circle p-1 border-0" onClick={handleShow}>
            <IconContext.Provider value={{size: '24px'}}>
              <GrCircleInformation/>
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