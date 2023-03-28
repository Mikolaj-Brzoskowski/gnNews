import React, { useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { AiOutlineAppstore, AiOutlineUnorderedList, AiOutlineInfoCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import SideMenu from '../SideMenu'
import type { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { turnOnCardsView, turnOnListView } from '../../features/newsSlice'
import { Tooltip } from 'react-tooltip'
import { useTranslation } from 'react-i18next';

const Header = () => {

  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isCardViewOn = useSelector((state: RootState) => state.news.newsCardsView)
  const dispatch = useDispatch()
  const { t } = useTranslation();
  
  return (
    <Row className='p-2'>
      <Col xs="auto" className="align-self-center">
        <SideMenu/>
      </Col>
      <Col className="mt-2">
        <Link to='/' className="text-decoration-none text-color-black text-reset">
          <h1 className="text-sm-left mt-1">gnNews</h1>
        </Link>
      </Col>
        <Col xs={ 1 } md="auto" className="align-self-center m-2" >
          {isCardViewOn 
          ? 
          (
          <Button variant="outline-secondary" className="rounded-circle p-1 border-0" onClick={(e) => dispatch(turnOnListView())} data-tooltip-id="button-1" data-tooltip-content={`${t('list')}`}>
          <IconContext.Provider value={{size: '36px', color: 'black'}}>
            <AiOutlineUnorderedList/>
          </IconContext.Provider>
          <Tooltip id="button-1" />
        </Button>) 
          : 
          (<Button variant="outline-secondary" className="rounded-circle p-1 border-0" onClick={(e) => dispatch(turnOnCardsView())} data-tooltip-id="button-2" data-tooltip-content={`${t('cards')}`}>
          <IconContext.Provider value={{size: '36px', color: 'black'}}>
            <AiOutlineAppstore/>
          </IconContext.Provider> 
          <Tooltip id="button-2"/>
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
              <Modal.Title>{t('info')}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{t('like')} </Modal.Body>
            <Modal.Body>{t('dislike')} </Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
              {t('close')}
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
    </Row>
  )
}

export default Header