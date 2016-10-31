import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import { fromJS } from 'immutable'

const expect = chai.expect
const CountryConnect = rewire("./")
const Country = CountryConnect.__get__('Country')
const mapStateToProps = CountryConnect.__get__('mapStateToProps')
let wrapper

describe('<Country />', () => {
  beforeEach(() => {
    wrapper = shallow(<Country country={fromJS({ countryCode: 'GB' })} />)
  })

  it('mapStateToProps()', () => {
    expect(mapStateToProps({country: 'country'})).to.jsonEqual({country: 'country'})
  })

  it('calls componentWillMount', () => {
    const willMount = sinon.spy(Country.prototype, 'componentWillMount')

    shallow(<Country country={fromJS({ countryCode: 'FR' })} />)
    expect(willMount.calledOnce).to.be.true
  })

  it('country state should be equal to GB', () => {
    expect(wrapper.state('country')).to.be.equal('GB')
  })

  it('calls componentWillReceiveProps', () => {
    const countryUpdate = sinon.spy()
    const receiveProps = sinon.spy(Country.prototype, 'componentWillReceiveProps')
    const wrapper = shallow(<Country countryUpdate={countryUpdate} country={fromJS({ countryCode: 'ES' })} />)

    expect(receiveProps.calledOnce).to.be.false
    wrapper.setProps({country: fromJS({ countryCode: 'FR' })})
    expect(receiveProps.calledOnce).to.be.true
  })

  it('country should be equal to FR after updating the country with FR and user disconnected', () => {
    const countryUpdate = sinon.spy()
    const wrapper = shallow(<Country countryUpdate={countryUpdate} country={fromJS({ countryCode: 'GB' })}/>)

    wrapper.setProps({country: fromJS({ countryCode: 'FR' })})
    expect(wrapper.state('country')).to.be.equal('FR')
  })

  it('should have a <DropDownMenu /> country', () => {
    expect(wrapper.find('DropDownMenu')).to.have.length(1)
    expect(wrapper.find('DropDownMenu').prop('value')).to.be.equal('GB')
  })

  it('simulate change <DropDownMenu /> country', () => {
    const handleChangeCountry = sinon.spy(Country.prototype, 'handleChangeCountry')
    const countryUpdate = sinon.spy()
    const wrapper = shallow(<Country countryUpdate={countryUpdate} country={fromJS({ countryCode: 'GB' })} />)

    wrapper.find('DropDownMenu').simulate('change')
    expect(handleChangeCountry.calledOnce).to.be.true
    expect(countryUpdate.calledOnce).to.be.true
  })

  describe('user login', () => {
    it('should have country initiated in store', () => {
      const countryUpdate = sinon.spy()
      const wrapper = shallow(<Country countryUpdate={countryUpdate} country={fromJS({countryCode: 'FR'})} />)

      expect(wrapper.state('country')).to.be.equal('FR')
    })
  })
})
