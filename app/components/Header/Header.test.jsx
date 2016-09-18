const { describe, it } = global

import expect from 'expect'
import React from 'react'
import { mount, shallow } from 'enzyme'
import TestUtils from 'react-addons-test-utils'

import Header from './Header'

function setup() {
  const props = {
  }

  return shallow(<Header {...props} />)
}

describe('Header Component', () => {
  it('renders header tag', () => {
    const wrapper = setup()
    expect(wrapper.find('header').length).toBe(1)
  })

  it('renders header and then check text', () => {
    const wrapper = setup()
    expect(wrapper.find('header').text()).toEqual('header')
  })


/*  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false)
    expect(wrapper.find('input').props().value).toBe('Save')
  });

  it('save button is labeled "Saving..." when saving', () => {
    const wrapper = setup(true)
    expect(wrapper.find('input').props().value).toBe('Saving...')
  });*/
})
