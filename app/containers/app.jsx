/**
 * Created by pheadra on 7/8/15.
 */
import React from 'react'

import debug from 'debug'
const log = debug('application:app.jsx')


/*
import ga from 'react-google-analytics'
var GAInitiailizer = ga.Initializer
*/
export default class App extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    log('did mount app')

    //var GA_TRACKING_CODE = 'UA-53731828-10'
    //ga('create', GA_TRACKING_CODE, 'auto')
  }

  render() {
    return (
      <section>
        {this.props.children}
      </section>
    )
  }
  //<GAInitiailizer />
}
