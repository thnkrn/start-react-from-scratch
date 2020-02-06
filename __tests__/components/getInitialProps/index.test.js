import React from 'react'
import { shallow } from 'enzyme'
import Example from '../../../components/getInitialProps'

describe('snapshot', () => {
  it('should match snapshot', () => {
    const component = shallow(<Example />)

    expect(component).toMatchSnapshot()
  })
})

describe('getInitialProps', () => {
  it('should return data = server', () => {
    const result = Example.getInitialProps({ isServer: true })

    expect(result).toStrictEqual({ data: 'server' })
  })

  it('should return data = client', () => {
    const result = Example.getInitialProps({ isServer: false })

    expect(result).toStrictEqual({ data: 'client' })
  })
})
