import chai from 'chai'
import rewire from 'rewire'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import jsdom from 'jsdom'

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

describe('<Header />', () => {
  beforeEach(() => {
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

    shallow(<Header />)
    expect(willMount.calledOnce).to.be.true
  })

  it('country state should be equal to GB', () => {
    const wrapper = shallow(<Header />)

    expect(wrapper.state('country')).to.be.equal('GB')
  })

  it('calls componentWillReceiveProps', () => {
    const countryUpdate = sinon.spy()
    const receiveProps = sinon.spy(Header.prototype, 'componentWillReceiveProps')
    const wrapper = shallow(<Header countryUpdate={countryUpdate} />)

    expect(receiveProps.calledOnce).to.be.false
    wrapper.setProps({country: 'FR'})
    expect(receiveProps.calledOnce).to.be.true
  })

  it('country should be equal to FR and isCountrySelectable should be equal to true after updating the country with FR and user disconnected', () => {
    const countryUpdate = sinon.spy()
    const wrapper = shallow(<Header countryUpdate={countryUpdate} />)

    wrapper.setProps({country: 'FR'})
    expect(wrapper.state('country')).to.be.equal('FR')
    expect(wrapper.state('isCountrySelectable')).to.be.true
  })

  it('isCountrySelectable should be equal to false after login', () => {
    const countryUpdate = sinon.spy()
    const wrapper = shallow(<Header countryUpdate={countryUpdate} />)

    expect(wrapper.state('isCountrySelectable')).to.be.true
    wrapper.setProps({user: {'@id': 'users/khxfdgj-xdfhgx-54xdfg', username: 'my name', email: 'mon@email.com', country: 'ES'}})
    expect(wrapper.state('isCountrySelectable')).to.be.false
  })

  it('should have one header', () => {
    const wrapper = shallow(<Header />)

    expect(wrapper.find('header')).to.have.length(1)
  })

  it('should have 6 li', () => {
    const wrapper = shallow(<Header />)
    const wrapperLi = wrapper.find('header').find('ul li')

    expect(wrapperLi).to.have.length(6)
    expect(wrapperLi.at(0).find('Link').prop('children')).to.be.equal('Burger menu')
    expect(wrapperLi.at(1).find('Link').prop('children')).to.be.equal('Home')
    expect(wrapperLi.at(2).find('Link').prop('children')).to.be.equal('Site search')
    expect(wrapperLi.at(3).find('Link').prop('children')).to.be.equal('Help')
  })

  it('should have a <DropDownMenu /> country', () => {
    const wrapper = shallow(<Header />)
    const wrapperLi = wrapper.find('header').find('ul li')

    expect(wrapperLi.at(5).find('DropDownMenu')).to.have.length(1)
    expect(wrapperLi.at(5).find('DropDownMenu').prop('value')).to.be.equal('GB')
  })

  it('simulate change <DropDownMenu /> country', () => {
    const handleChangeCountry = sinon.spy(Header.prototype, 'handleChangeCountry')
    const countryUpdate = sinon.spy()
    const wrapper = shallow(<Header countryUpdate={countryUpdate} />)
    const wrapperLi = wrapper.find('header').find('ul li')

    wrapperLi.at(5).find('DropDownMenu').simulate('change')
    expect(handleChangeCountry.calledOnce).to.be.true
    expect(countryUpdate.calledOnce).to.be.true
  })

  it('clicking on login should be a popover', () => {
    const wrapper = shallow(<Header />)

    expect(wrapper).to.have.length(1)
    wrapper.find('header RaisedButton').simulate('TouchTap', {preventDefault: () => {}})
    wrapper.find('header ul li').find('Popover').simulate('RequestClose', {preventDefault: () => {}})

    expect(handleTouchTap.calledOnce).to.be.true
    expect(handleRequestClose.calledOnce).to.be.true
  })

  describe('user login', () => {
    it('should have isCountrySelectable=true before user login and false after user login', () => {
      const countryUpdate = sinon.spy()
      const wrapper = shallow(<Header countryUpdate={countryUpdate} country="FR" />)

      expect(wrapper.state('country')).to.be.equal('FR')
      expect(wrapper.state('isCountrySelectable')).to.be.true
      wrapper.setProps({user: {username: 'my name', '@id': 'users/xdfg-xfghfxgd54xfgh', country: 'ES'}})
      expect(wrapper.state('isCountrySelectable')).to.be.false
    })

    it('should have country initiated in store and isCountrySelectable=false', () => {
      const countryUpdate = sinon.spy()
      const wrapper = shallow(<Header countryUpdate={countryUpdate} user={{'@id': 'users/xdfgxdg-xfghxfgh-54xfcgh', username: 'my name', email: 'mon@email.com', country: 'FR'}} country="FR" />)

      expect(wrapper.state('country')).to.be.equal('FR')
      expect(wrapper.state('isCountrySelectable')).to.be.false
    })

    it('should have <RaisedButton /> my account', () => {
      const countryUpdate = sinon.spy()
      const wrapper = shallow(<Header countryUpdate={countryUpdate} user={{'@id': 'users/xdfgxdg-xfghxfgh-54xfcgh', username: 'my name', email: 'mon@email.com', country: 'FR'}} country="FR" />)

      expect(wrapper.state('country')).to.be.equal('FR')
      expect(wrapper.find('header RaisedButton')).to.have.length(1)
      wrapper.find('header RaisedButton').simulate('TouchTap', {preventDefault: () => {}})
      expect(handleTouchTap.calledOnce).to.be.true
      wrapper.find('header ul li').find('Popover').simulate('RequestClose', {preventDefault: () => {}})
      expect(handleRequestClose.calledOnce).to.be.true
    })
  })
})
