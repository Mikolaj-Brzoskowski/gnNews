import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Button, ListGroup, Offcanvas } from 'react-bootstrap';
import { countries } from '../../data/coutries';
import { useNavigate } from 'react-router-dom';

const SideMenu = () => {

  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={handleShow} variant="outline-dark" className="rounded-circle p-2 border-0">
        <IconContext.Provider value={{size: '36px'}}>
          <FaBars/>
        </IconContext.Provider> 
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <h1 className="text-sm-left">gnNews</h1>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="w-100">
          <ListGroup variant="flush">
            {countries.sort().map( (country) => (
              <ListGroup.Item className='d-flex flex-row align-items-center' action onClick={() => navigate(`/country/${country.code}`)}>
                <div className={`fib fi-${country.code.toLowerCase()} h-25 w-25`}>
                  <IconContext.Provider value={{size: '24px'}}>
                    <BsDot/>
                  </IconContext.Provider> 
                </div>
                {country.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default SideMenu