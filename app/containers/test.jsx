import React from 'react'

import debug from 'debug'
const log = debug('application:test.jsx')

/**
 * A pages to Main
 */
export default class Test extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    log('test render')
    return (
      <article>
        test
      </article>
    )
  }
}
