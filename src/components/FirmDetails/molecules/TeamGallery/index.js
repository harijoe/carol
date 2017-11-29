import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Lightbox from 'react-images'
import injectTranslate from 'i18n/hoc/injectTranslate'
import BorderBox from 'components/BorderBox'
import Grid from 'components/Grid'
import TeamPictures from '../TeamPictures'

const TeamWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

class TeamGallery extends React.Component {
  state = {
    lightboxIsOpen: false,
    currentImage: 0,
  }

  onClickImage = imageIndex => {
    this.setState({
      currentImage: imageIndex,
      lightboxIsOpen: true,
    })
  }

  goToNext = () => this.setState(({ currentImage }) => ({ currentImage: currentImage + 1 }))

  goToPrevious = () => this.setState(({ currentImage }) => ({ currentImage: currentImage - 1 }))

  closeLightbox = () => {
    this.setState({ lightboxIsOpen: false })
  }

  render() {
    const { pictures, translate } = this.props
    const { currentImage, lightboxIsOpen } = this.state
    return (
      <Grid narrow>
        <BorderBox grey mediumBorder title={translate('firm.details.team')}>
          <TeamWrapper>
            <TeamPictures pictures={pictures} onClick={this.onClickImage} />
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
          </TeamWrapper>
        </BorderBox>
      </Grid>
    )
  }
}

TeamGallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    description: PropTypes.string,
  })).isRequired,
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(TeamGallery)
