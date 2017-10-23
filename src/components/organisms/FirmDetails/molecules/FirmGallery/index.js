import React, { Component } from 'react'
import PropTypes from 'prop-types'
import injectTranslate from 'i18n/hoc/injectTranslate'
import Masonry from 'react-masonry-component'
import Lightbox from 'react-images'
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
  cursor: pointer;
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
      showGallery: false,
      lightboxIsOpen: false,
      currentImage: 0,
    }
  }

  goToNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }

  goToPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }

  openLightbox = (index, e) => {
    e.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }

  render() {

    const { translate, pictures } = this.props

    const childElements = pictures.map((element, index) => (
        <MasonryItem key={index} onClick={e => this.openLightbox(index, e)}>
          <img src={transformThumbnailUrl(element.url)} alt={element.description} />
        </MasonryItem>
      ))

    const galleryContent = pictures.map((element, index) => ({
      key: index,
      src: element.url,
      caption: element.description,
    }))

    return (
      <div>
      <MasonryWrapper>
        <Masonry
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >
          {childElements}
        </Masonry>
      </MasonryWrapper>
      <Lightbox
        backdropClosesModal
        imageCountSeparator={` ${translate('firm.gallery.of')} `}
        currentImage={this.state.currentImage}
        images={galleryContent}
        isOpen={this.state.lightboxIsOpen}
        onClickNext={this.goToNext}
        onClickPrev={this.goToPrevious}
        onClickThumbnail={this.goToImage}
        onClose={this.closeLightbox}
        showThumbnails={false}
      />
      </div>
    )
  }
}

FirmGallery.propTypes = {
  translate: PropTypes.func.isRequired,
  pictures: PropTypes.array,
}

export default injectTranslate(FirmGallery)
