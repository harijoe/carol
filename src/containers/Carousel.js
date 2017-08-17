import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromContext } from 'store/selectors'

import { Carousel } from 'components'

const CarouselContainer = props =>
  <Carousel {...props}>
    {props.children}
  </Carousel>

CarouselContainer.propTypes = {
  children: PropTypes.any,
}

const mapStateToProps = state => ({
  ssr: fromContext.isSSR(state),
})

export default connect(mapStateToProps)(CarouselContainer)
