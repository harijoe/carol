import React from 'react'
import PropTypes from 'prop-types'
import injectTranslate from 'i18n/hoc/injectTranslate'
import styled, { css } from 'styled-components'
import { theme, breakpoint, ifThen } from 'utils/style'

import { Card, Heading, Button, List, Icon } from 'components'

const StyledCard = styled(Card)`
  margin-top: ${theme('spaces.xxl')};

  ${breakpoint('m')`
    max-width: 35rem;
    margin-left: auto;
    margin-right: auto;
  `} 
`

const styles = ({ type }) => css`
  display: flex;
  flex-direction: column;
  margin: -${theme('spaces.xxl')} ${theme('spaces.m')}  0  ${theme('spaces.m')};
  width: calc(100% - 3.2rem);
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 1px 0 10px 0 rgba(19, 19, 19, 0.3);

  ${breakpoint('m')`
    margin-left: ${theme('spaces.l')};
    margin-right: ${theme('spaces.l')};
    width: calc(100% - 5rem);
  `}

  ${ifThen(type === 'free', css`background: ${theme('colors.grey')};`)}
  ${ifThen(type === 'local', css`background: ${theme('colors.grayscale.darker')};`)}
  ${ifThen(type === 'connect', css`background: ${theme('colors.primary')};`)}
`

const stylesNamePlan = ({ type }) => css`
  position: relative;
  padding-bottom: ${theme('spaces.m')};
  font-family: ${theme('fonts.family.andesLight')};
  font-size: ${theme('fonts.size.xl')};

  b {
    display: block;
    margin-top: ${theme('spaces.s')};
    font-family: ${theme('fonts.family.montserrat')};
    font-size: ${theme('fonts.size.base')};
  }

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 25px;
    content: '';
  }

  ${ifThen(
    type === 'free',
    css`
      color: ${theme('colors.grayscale.darker')};

      b {
        color: ${theme('colors.grayscale.dark')};
      }

      &::after {
        background-color: ${theme('colors.black')};
      }
    `,
  )}

  ${ifThen(
    type === 'local' || type === 'connect',
    css`
      color: ${theme('colors.grayscale.lightest')};

      b {
        color: ${theme('colors.grayscale.lightest')};
      }

      &::after {
        background-color: ${theme('colors.grayscale.lightest')};
      }
    `,
  )}
`

const stylesTitle = ({ type }) => css`
  margin-bottom: ${theme('spaces.xl')};
  line-height: 1.25;

  ${breakpoint('m')`
    margin-bottom: ${theme('spaces.xxl')};
  `}  

  ${ifThen(
    type === 'local' || type === 'connect',
    css`
      color: ${theme('colors.grayscale.lightest')};

      b {
        color: ${theme('colors.grayscale.lightest')};
      }

      &::after {
        background-color: ${theme('colors.grayscale.lightest')};
      }
    `,
  )}
`

const PlanIcon = styled(Icon)`
  position: absolute;
  right: -26px;
  top: -29px;
  height: 97px;
  width: 97px;
`

const PlanHeader = styled(Card.Header)`${styles}`

const NamePlan = styled(Heading)`${stylesNamePlan}`

const TitlePlan = styled(Heading)`${stylesTitle}`

const StyledButton = styled(Button)`
  margin: 0;
  margin-top: auto;
`

const StyledList = styled(List)`
  margin: 0;
`

const PlanCard = ({ title, className, translate, list, type, namePlan, pricePlan, titlePlan, labelButtonPlan, ...props }) =>
  <StyledCard className={className} padding="fluid" {...props}>
    <PlanHeader height="auto" type={type}>
      <PlanIcon icon={`icon_${type}_plan`} />
      <NamePlan level={3} type={type}>
        {namePlan}
        <b>{pricePlan}</b>
      </NamePlan>
      <TitlePlan level={2} type={type}>
        {titlePlan}
      </TitlePlan>
      {type === 'free' ?
        <StyledButton state="third" outline>
          {labelButtonPlan}
        </StyledButton>
        :
        <StyledButton>
          {labelButtonPlan}
        </StyledButton>
      }
    </PlanHeader>
    <Card.Body>
      <StyledList>
        {list}
      </StyledList>
    </Card.Body>
  </StyledCard>

PlanCard.propTypes = {
  title: PropTypes.string.isRequired,
  translate: PropTypes.func,
  className: PropTypes.string,
  list: PropTypes.string,
  type: PropTypes.oneOf(['free', 'local', 'connect']),
  namePlan: PropTypes.string,
  pricePlan: PropTypes.string,
  titlePlan: PropTypes.string,
  labelButtonPlan: PropTypes.string,
}

PlanCard.defaultProps = {
  type: 'free',
}

export default injectTranslate(PlanCard)
