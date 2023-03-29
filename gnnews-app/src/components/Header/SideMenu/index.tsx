import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Button, Col, ListGroup, Offcanvas } from 'react-bootstrap';
import { countries } from '../../../data/coutries';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SideMenu = () => {

  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const handleClick = (countryCode: string) => {
    navigate(`/country/${countryCode}`); 
    handleClose();
  }
  
  const conditionalMenuRender = () => {
    if (i18n.language === 'en') return (
      <>
      {countries.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map( (country) => (
        <ListGroup.Item 
        role="navigation" 
        className='d-flex flex-row align-items-center' 
        action onClick={() => handleClick(country.code)} 
        key={country.code}>
          <div className={`fib fi-${country.code.toLowerCase()} h-25 w-25`}>
            <IconContext.Provider value={{size: '24px'}}>
              <BsDot/>
            </IconContext.Provider> 
          </div>
          {country.name}
        </ListGroup.Item>
      ))}
      </>
    )
    if (i18n.language === 'pl') return (
      <>
      {
        countries.sort((a,b) => (a.nazwa > b.nazwa) ? 1 : ((b.nazwa > a.nazwa) ? -1 : 0)).map( (country) => (
          <ListGroup.Item  role="navigation" 
          className='d-flex flex-row align-items-center' 
          action onClick={() => handleClick(country.code)} 
          key={country.code}>
            <div className={`fib fi-${country.code.toLowerCase()} h-25 w-25`}>
              <IconContext.Provider value={{size: '24px'}}>
                <BsDot/>
              </IconContext.Provider> 
            </div>
            {country.nazwa}
          </ListGroup.Item>
        ))
      }
      </>
      )
    }

  return (
    <>
    <Col xs="auto" className="align-self-center">
      <Button onClick={handleShow} variant="outline-dark" className="rounded-circle p-2 border-0">
          <IconContext.Provider value={{size: '36px'}}>
            <FaBars/>
          </IconContext.Provider> 
        </Button>
        {/* causes error while testing Header component:
        TypeError: Cannot set properties of undefined (setting 'refCount')*/}
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
            <h1 className="text-sm-left">gnNews</h1>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="w-100">
            <ListGroup variant="flush">
              {conditionalMenuRender()}
            </ListGroup>
          </Offcanvas.Body>
        </Offcanvas>
    </Col>
    </>
  )
}

export default SideMenu