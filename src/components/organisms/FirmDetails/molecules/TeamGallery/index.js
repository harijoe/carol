import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Truncate from 'react-truncate'
import injectTranslate from 'i18n/hoc/injectTranslate'
import { theme, breakpointMax } from 'utils/style'

import {
  BorderBox,
  Grid,
  ProfileImage,
} from 'components'

const TeamWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const TeamMemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1.25rem;
  flex: 1;
  text-align: center;

  ${breakpointMax('m')`
    margin: 1.25rem;
  `};
`

const StyledProfileImage = styled(ProfileImage)`
  margin-bottom: ${theme('spaces.s')};
  background-size: cover;
`

const TeamGallery = ({ teamPictures, translate }) =>
  <Grid narrow>
    <BorderBox grey mediumBorder title={translate('firm.details.team')}>
      <TeamWrapper>
        {teamPictures.map((item, index) => (
          <TeamMemberWrapper key={index}>
            <StyledProfileImage image={item.url} size={'xl'} />
            {item.description && (
              <Truncate lines={2}>
                {item.description}
              </Truncate>
            )}
          </TeamMemberWrapper>
        ))}
      </TeamWrapper>
    </BorderBox>
  </Grid>

TeamGallery.propTypes = {
  teamPictures: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    description: PropTypes.string,
  })),
  translate: PropTypes.func.isRequired,
}

export default injectTranslate(TeamGallery)
