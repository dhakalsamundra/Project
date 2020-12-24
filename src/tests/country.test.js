import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import { Provider } from 'react-redux'
import Country from '../Components/Country/country'
import makeStore from '../redux/store'
import { BrowserRouter as Router } from 'react-router-dom'

const store = makeStore()

test('render content', () => {
  const component = render(
    <Provider store={store}>
      <Router>
        <Country />
      </Router>
    </Provider>
  )
  expect(component.container).toHaveTextContent('Flag')
})

