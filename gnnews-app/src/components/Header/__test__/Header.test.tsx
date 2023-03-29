import {fireEvent, render, screen, waitFor} from '@testing-library/react' // (or /dom, /vue, ...)
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { store } from '../../../store/store'
import '../../../i18n'
import LaungageSwitch from '../LaungaugeSwitch'
import HeaderButtons from '../HeaderButtons'
import News from '../../News'
import List from '../../News/List'
import Cards from '../../News/Cards'
import { act } from 'react-dom/test-utils'

describe('Laungauge Switch test', () => {

    test('if changing laungauge works properly', () => {
        render(
          <Provider store={store}>
              <LaungageSwitch/>
          </Provider >)
      
          const text = screen.getByRole("textbox")
          const lanButton = screen.getByTestId("button")
          fireEvent.click(lanButton)
          expect(text.textContent).toBe("Język:")
    })

})

describe('Cards/List functionality tests', () => {

    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(
            <Provider store={store}>
                <HeaderButtons/>
                <News/>
                <List/>
                <Cards/>
            </Provider>)
    })

    test('if changing cards/lists button works properly', async () => {
        const listButton = screen.getByTestId("button-1")
        fireEvent.click(listButton)
        const cardButton = await  screen.findByTestId("button-2")
        expect(cardButton).toBeInTheDocument()
      })

    //   test('if changing cards/lists button displays News component properly', async () => {

    //     const cardButton = screen.getByTestId("button-2")
    //     fireEvent.click(cardButton)
    //     const cardsView = await screen.findAllByTestId("cards")
    //     await waitFor(() => expect(cardsView).toBeInTheDocument())
    //   })
})

