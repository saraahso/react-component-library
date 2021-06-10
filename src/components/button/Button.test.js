import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'


const mockFunction = jest.fn()
/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = () => {
  const btn_text = 'Test Button'
  const btn_background = 'blue'
  const btn_size = 'small'
  const btn_type = 'round'
  return shallow(<Button onClick={mockFunction} backgroundColor={btn_background} size={btn_size} type={btn_type}>{btn_text}</Button>)
}

describe('Button', () => {
  it('should render the button text', () => {
    const wrapper = setup()
    expect(wrapper.text().includes('Test Button')).toBe(true)
  })

  it('calls onClick when button is clicked', () => {
    const wrapper = setup()
    wrapper.find('button').simulate('click');
    expect(mockFunction.mock.calls.length).toEqual(1);
  });

  it('should check button size', () => {
    const wrapper = setup()
    expect(wrapper.props().size).to.equal('small');
  });
})

