/**
 * Created by luke.park on 5/2/16.
 */
 // TODO : 훔 webpack2가 되면서 문제가 있네 ㅠㅠ

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod').default
} else {
  module.exports = require('./configureStore.dev').default
}