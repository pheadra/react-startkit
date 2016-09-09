/**
 * Created by luke on 9/9/15.
 */

import React from 'react'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import debug from 'debug'
const log = debug('application:router')

import App from './containers/app'
import Main from './containers/main'
import Test from './containers/test'

import NotFound from './containers/notFound'

export default class extends React.Component {
  constructor(props) {
    super(props)

    if(browserHistory != undefined) {
      browserHistory.listen((location) => {
        log('listen', location)
      })
    }
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={ App }>
          <IndexRoute component={ Main }/>
          <Route path="test" component={ Test }/>

          <Route path="*" component={ NotFound }/>
        </Route>
      </Router>
    )
  }
}


