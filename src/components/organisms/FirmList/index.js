import React from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme, breakpoint } from 'utils/style'

import { Loading, Link, Heading, Paragraph, Icon, Grid } from 'components'
import { FirmAcceptButton } from 'containers'

const StyledLink = styled(Link)`
  position: absolute;
  top: -4rem;
  right: 0;
  display: inline-block;
  line-height: 1;
  color: ${theme('colors.grayscale.dark')};
`

const StyledIcon = styled(Icon)`
  margin-right: ${theme('spaces.s')};
`

const StyledParagraph = styled(Paragraph)`
  strong {
    font-family: ${theme('fonts.family.montserratBold')};
    font-weight: normal;
    color: ${theme('colors.primary')};
  }

  ${breakpoint('m')`
    margin-bottom: ${theme('spaces.l')};
  `}
`

const FirmList = ({ list, loading, projectId }) => (
  <Loading {...{ loading }}>
    <StyledLink to="/project-elaboration">
      <StyledIcon icon="back" />
      <FormattedMessage id="project.modify_my_project" />
    </StyledLink>
    <Grid narrow>
      <Heading level={1}><FormattedMessage id={`firm.list.${list.length > 1 ? 'good_news' : 'thank_you'}`} /></Heading>
      <StyledParagraph>
        <FormattedMessage id={`firm.list.${list.length > 1 ? 'has_results' : 'no_results'}`} />
      </StyledParagraph>
    </Grid>
    <FirmAcceptButton projectId={projectId} />
  </Loading>
)

FirmList.propTypes = {
  list: PropTypes.array,
  loading: PropTypes.bool,
  projectId: PropTypes.string,
}

export default FirmList
