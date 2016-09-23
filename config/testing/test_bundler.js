
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())


const testsContext = require.context('../../app', true, /\.test\.(js)$/)
testsContext.keys().forEach(testsContext)
const testsContext2 = require.context('../../app', true, /\.test\.(jsx)$/)
testsContext2.keys().forEach(testsContext2)


const componentsContext = require.context('../../app', true, /^((?!main|router).)*\.jsx$/)
componentsContext.keys().forEach(componentsContext)
const componentsContext2 = require.context('../../app', true, /^((?!main|router).)*\.js$/)
componentsContext2.keys().forEach(componentsContext2)
