import React, { Component } from 'react'
import PropTypes from 'prop-types'
import injectTranslate from 'i18n/hoc/injectTranslate'
import Masonry from 'react-masonry-component'
import Lightbox from 'react-images'
import styled from 'styled-components'
import { breakpoint, theme } from 'utils/style'
import transformThumbnailUrl from 'utils/transformThumbnailUrl'
import { Button } from 'components'

const MasonryWrapper = styled.div`
  width: 100%;
  max-width: 95rem;
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
  width: 100%;
  cursor: pointer;
  img {
    width: 100%;
    max-width: 100%;
    height: 100%;
  }
  
  ${breakpoint('m')`
    width: 50%;
    padding-right: ${theme('spaces.s')}
  `} 
   
  ${breakpoint('l')`
    width: 33.3%;
    padding-right: ${theme('spaces.s')}
  `}  
`

const StyledButton = styled(Button)`
  display: inline;
  width: auto;
`
const CenteredWrapper = styled.div`
  text-align: center;
`

class FirmGallery extends Component {

  state = {
    lightboxIsOpen: false,
    currentImage: 0,
    maxPictures: 12,
  }

  onMoreProjectPictures = e => {
    e.preventDefault()
    this.setState(({ maxPictures }) => ({ maxPictures: maxPictures + 12 }))
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
    const { currentImage, lightboxIsOpen, maxPictures } = this.state

    const childElements = pictures.slice(0, maxPictures).map((element, index) => (
        <MasonryItem key={index} onClick={e => this.openLightbox(index, e)}>
          <img src={transformThumbnailUrl(element.url)} alt={element.description} />
        </MasonryItem>
      ))

    return (
      <div>
        <MasonryWrapper>
          <Masonry
            elementType={'ul'}
            options={{ transitionDuration: 0.3 }}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
          >
            {childElements}
          </Masonry>
        </MasonryWrapper>
        <CenteredWrapper>
        {maxPictures < pictures.length && (
          <StyledButton onClick={this.onMoreProjectPictures}>
            {translate('firm.gallery.see_more_project_pictures')}
          </StyledButton>
        )}
        </CenteredWrapper>
        <Lightbox
          images={pictures.map(({ url, description }) => ({ key: url, src: url, caption: description }))}
          isOpen={lightboxIsOpen}
          onClose={this.closeLightbox}
          currentImage={currentImage}
          onClickNext={this.goToNext}
          onClickPrev={this.goToPrevious}
          imageCountSeparator={` ${translate('firm.gallery.of')} `}
          backdropClosesModal
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
