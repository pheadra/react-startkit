/**
 * Created by luke.park on 9/11/16.
 */
import React from 'react'

import debug from 'debug'
const log = debug('application:app.jsx')

import Header from '../components/Header'
import Menu from '../components/Menu'

import Popup from '../components/Popup'

import DevTools from '../components/DevTools'

//http://stackoverflow.com/questions/29481961/react-router-google-tag-manager
//import ga from 'react-google-analytics'
//let GAInitiailizer = ga.Initializer

export default class App extends React.Component {
  componentDidMount() {
    log('did mount app')

    //var GA_TRACKING_CODE = 'UA-53731828-10'
    //ga('create', GA_TRACKING_CODE, 'auto')
  }

  render() {
    return (
      <section>
        <Header />
        <Menu />
        {this.props.children}
        {this.renderDevTools}
        <Popup>
          {/*Popup Components*/}
        </Popup>
       {/*<GAInitiailizer />*/}
      </section>
    )
  }

  get renderDevTools() {
    if (process.env.NODE_ENV === 'production') {
      return null
    } else {
      return <DevTools />
    }
  }

}
