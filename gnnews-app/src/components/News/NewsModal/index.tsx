import React from 'react'
import { Button, Modal } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

const NewsModal = (props: any) => {

    const { t } = useTranslation() 
    
    if (props.modalkey === props.modalid) return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
                {props.news.title.replace(` - ${props.news.author}` || '','')}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='mb-auto'>
            {props.news.content}
        </Modal.Body>
        <Modal.Body className="overflow-scroll">
        {t('more')} <a href={`${props.news.url}`} target="_blank" rel="noopener noreferrer">{props.news.url}</a>
        </Modal.Body>
        <Modal.Footer>
            <Modal.Body>
            {t('author')} {props.news.author}
            </Modal.Body>
          <Button onClick={props.onHide}>{t('close')}</Button>
        </Modal.Footer>
      </Modal>
    );
    else return null;
  }

export default NewsModal