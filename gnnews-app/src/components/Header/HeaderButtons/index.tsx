import React, { useState } from 'react'
import { Button, Col, Modal } from 'react-bootstrap'
import { AiOutlineAppstore, AiOutlineUnorderedList, AiOutlineInfoCircle } from 'react-icons/ai'
import { turnOnCardsView, turnOnListView } from '../../../features/newsSlice'
import { Tooltip } from 'react-tooltip'
import type { RootState } from '../../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { IconContext } from 'react-icons'
import { useTranslation } from 'react-i18next'

const HeaderButtons = () => {

    const isCardViewOn = useSelector((state: RootState) => state.news.newsCardsView)
    const dispatch = useDispatch()
    const { t } = useTranslation();

    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        {/* card/list button */}
            <Col xs={ 1 } md="auto" className="align-self-center m-2" >
                {isCardViewOn 
                ? 
                (
                <Button 
                variant="outline-secondary" 
                className="rounded-circle p-1 border-0" 
                onClick={(e) => dispatch(turnOnListView())} 
                data-tooltip-id="button-1" 
                data-tooltip-content={`${t('list')}`}
                data-testid="button-1">
                    <IconContext.Provider value={{size: '36px', color: 'black'}}>
                        <AiOutlineUnorderedList/>
                    </IconContext.Provider>
                    <Tooltip id="button-1" />
                </Button>) 
                    : 
                (<Button 
                variant="outline-secondary" 
                className="rounded-circle p-1 border-0" 
                onClick={(e) => dispatch(turnOnCardsView())} 
                data-tooltip-id="button-2" 
                data-tooltip-content={`${t('cards')}`}
                data-testid="button-2">
                    <IconContext.Provider value={{size: '36px', color: 'black'}}>
                        <AiOutlineAppstore/>
                    </IconContext.Provider> 
                    <Tooltip id="button-2"/>
                </Button>)
                }
            </Col>
        {/* info button with modal popup */}
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
                    <Modal.Body>{t('like')} Cała tematyka projektu mi odpowiadała, dobrze się bawiłem robiąc w sumie pierwszy większy projekt w TypeScripcie. 
                    Tłumaczenie strony było chyba najłatwiejsze, tym samym najprzyjemniejsze. Poza tym porównywałem sobie użycie Bootstrapa w przeciwieństwie do TailWinda, którego używam
                    w tym momencie w innym swoim projekcie, dzięki temu wiem mniej więcej, którego frameworka lepiej używać i jakie oba z frameworków mają wady/zalety. </Modal.Body>
                    <Modal.Body>{t('dislike')} Najwięcej problemów sprawiła mi paczka związana z flagami państw, których użyłem do wyświetlania w SideMenu. Będąc szczerym 
                    nadal nie wiem w jaki sposób ona nadal działa, ale cieszę się, że działa w ogóle. Poza tym było parę dziwnych sytuacji z ustawianiem flexa/grida, ale to w sumie standard.
                    Testy też były problematyczne, ponieważ przez komponent Offcanvas z react-bootstrap nie byłem w stanie przetestować headera (jakieś problemy z Ref, nie potrafiłem tego naprawić),
                    nie wspominając o tym, że pierwszy raz się nimi zajmowałem, przez co zajęły mi bardzo dużo czasu, a końcowo mało ich zaimplementowałem.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="dark" onClick={handleClose}>{t('close')}</Button>
                    </Modal.Footer>
                </Modal>
            </Col>
        </>
    )
}

export default HeaderButtons