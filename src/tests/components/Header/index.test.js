import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import jsdom from 'jsdom'
import { fromJS } from 'immutable'

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView
global.navigator = {
  userAgent: 'node.js'
}

const expect = chai.expect
const HeaderConnect = rewire("../../../components/Header")
const Header = HeaderConnect.__get__('Header')
const mapStateToProps = HeaderConnect.__get__('mapStateToProps')

let handleTouchTap
let handleRequestClose
let wrapper

describe('<Header />', () => {
  beforeEach(() => {
    wrapper = shallow(<Header country={fromJS({ countryCode: 'GB' })} />)

    handleTouchTap = sinon.spy(Header.prototype, 'handleTouchTap')
    handleRequestClose = sinon.spy(Header.prototype, 'handleRequestClose')
  })

  afterEach(() => {
    handleTouchTap.restore()
    handleRequestClose.restore()
  })

  it('mapStateToProps()', () => {
    expect(mapStateToProps({user: 'test', country: 'country'})).to.jsonEqual({user: 'test', country: 'country'})
  })

  it('calls componentWillMount', () => {
    const willMount = sinon.spy(Header.prototype, 'componentWillMount')

    shallow(<Header country={fromJS({ countryCode: 'FR' })} />)
    expect(willMount.calledOnce).to.be.true
  })

  it('country state should be equal to GB', () => {
    expect(wrapper.state('country')).to.be.equal('GB')
  })

  it('calls componentWillReceiveProps', () => {
    const countryUpdate = sinon.spy()
    const receiveProps = sinon.spy(Header.prototype, 'componentWillReceiveProps')
    const wrapper = shallow(<Header countryUpdate={countryUpdate} country={fromJS({ countryCode: 'ES' })} />)

    expect(receiveProps.calledOnce).to.be.false
    wrapper.setProps({country: fromJS({ countryCode: 'FR' })})
    expect(receiveProps.calledOnce).to.be.true
  })

  it('country should be equal to FR after updating the country with FR and user disconnected', () => {
    const countryUpdate = sinon.spy()
    const wrapper = shallow(<Header countryUpdate={countryUpdate} country={fromJS({ countryCode: 'GB' })}/>)

    wrapper.setProps({country: fromJS({ countryCode: 'FR' })})
    expect(wrapper.state('country')).to.be.equal('FR')
  })

  it('should have one header', () => {
    expect(wrapper.find('header')).to.have.length(1)
  })

  it('should have 7 li', () => {
    const wrapperLi = wrapper.find('header').find('ul li')

    expect(wrapperLi).to.have.length(7)
    expect(wrapperLi.at(0).find('Link').prop('children')).to.be.equal('Burger menu')
    expect(wrapperLi.at(1).find('Link').prop('children')).to.be.equal('Home')
    expect(wrapperLi.at(2).find('Link').prop('children')).to.be.equal('Site search')
    expect(wrapperLi.at(3).find('Link').prop('children')).to.be.equal('Find a pro')
    expect(wrapperLi.at(4).find('Link').prop('children')).to.be.equal('Help')
  })

  it('should have a <DropDownMenu /> country', () => {
    const wrapperLi = wrapper.find('header').find('ul li')

    expect(wrapperLi.at(6).find('DropDownMenu')).to.have.length(1)
    expect(wrapperLi.at(6).find('DropDownMenu').prop('value')).to.be.equal('GB')
  })

  it('simulate change <DropDownMenu /> country', () => {
    const handleChangeCountry = sinon.spy(Header.prototype, 'handleChangeCountry')
    const countryUpdate = sinon.spy()
    const wrapper = shallow(<Header countryUpdate={countryUpdate} country={fromJS({ countryCode: 'GB' })} />)
    const wrapperLi = wrapper.find('header').find('ul li')

    wrapperLi.at(6).find('DropDownMenu').simulate('change')
    expect(handleChangeCountry.calledOnce).to.be.true
    expect(countryUpdate.calledOnce).to.be.true
  })

  describe('user login', () => {
    it('should have country initiated in store', () => {
      const countryUpdate = sinon.spy()
      const wrapper = shallow(<Header countryUpdate={countryUpdate} user={{'@id': 'users/xdfgxdg-xfghxfgh-54xfcgh', username: 'my name', email: 'mon@email.com', country: 'FR'}} country={fromJS({countryCode: 'FR'})} />)

      expect(wrapper.state('country')).to.be.equal('FR')
    })

    it('should have <RaisedButton /> my account', () => {
      const countryUpdate = sinon.spy()
      const wrapper = shallow(<Header countryUpdate={countryUpdate} user={{'@id': 'users/xdfgxdg-xfghxfgh-54xfcgh', username: 'my name', email: 'mon@email.com', country: 'FR'}} country={fromJS({countryCode: 'FR'})} />)

      expect(wrapper.state('country')).to.be.equal('FR')
      expect(wrapper.find('header RaisedButton')).to.have.length(1)
      wrapper.find('header RaisedButton').simulate('TouchTap', {preventDefault: () => {}})
      expect(handleTouchTap.calledOnce).to.be.true
      wrapper.find('header ul li').find('Popover').simulate('RequestClose', {preventDefault: () => {}})
      expect(handleRequestClose.calledOnce).to.be.true
    })
  })
})
