import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Masonry from 'react-masonry-component'
import styled from 'styled-components'
import transformThumbnailUrl from 'utils/transformThumbnailUrl'

const MasonryWrapper = styled.div`
  width: 95rem;
  margin: 0 auto;
  padding: 0;
  ul {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`

const MasonryItem = styled.li`
  list-style-type: none;
  width: 32%;
  margin-right: 1%;
  img {
    width: 100%;
    max-width: 100%;
    height: 100%;
  }
`

const masonryOptions = {
  transitionDuration: 0.3,
}

class FirmGallery extends Component {

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {

    const { pictures } = this.props
    const childElements = pictures.map((element, index) => (
        <MasonryItem key={index}>
          <img src={transformThumbnailUrl(element.url)} alt={element.description} />
        </MasonryItem>
      ))

    return (
      <MasonryWrapper>
        <Masonry
          elementType={'ul'}
          options={masonryOptions}
        >
          {childElements}
        </Masonry>
      </MasonryWrapper>
    )
  }
}

FirmGallery.propTypes = {
  pictures: PropTypes.array,
}

export default FirmGallery
