import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Truncate from 'react-truncate'
import { theme, breakpointMax } from 'utils/style'
import ProfileImage from 'components/ProfileImage'

const TeamMemberWrapper = styled.div`
  cursor: pointer;
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

const TeamPictures = ({ pictures, onClick }) =>
  pictures.map((item, index) => (
    <TeamMemberWrapper key={index} onClick={() => onClick(index)}>
      <StyledProfileImage image={item.url} size={'xl'} />
      {item.description && (
        <Truncate lines={2}>
          {item.description}
        </Truncate>
      )}
    </TeamMemberWrapper>
  ))

TeamPictures.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    description: PropTypes.string,
  })).isRequired,
}

export default TeamPictures
