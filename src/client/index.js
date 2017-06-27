import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { appInit } from '../lib/actions'
import Root from './Root'

import store from '../lib/store'

const root = document.querySelector('#root')

store.dispatch(appInit())

const mount = (RootComponent) => {
  render(
    <Provider store={store}>
      <AppContainer>
        <RootComponent />
      </AppContainer>
    </Provider>,
    root
  )
}

if (module.hot) {
  module.hot.accept('./Root', () => {
    // eslint-disable-next-line global-require,import/newline-after-import
    const RootComponent = require('./Root').default
    mount(RootComponent)
  })
}


mount(Root)
