import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import injectTranslate from 'i18n/hoc/injectTranslate'

import { Icon, Heading } from 'components'
import { QuotatisLogoStatic } from 'containers'
import defaultTheme from '../../themes/default'

const LoadingWrapper = styled.div`
  display: flex;
  height: 100%;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

const Row = styled.div`
  width: auto;
`

const Element = styled.div`
  text-align: center;
  margin-top: 30px;
`

const Wrapper = styled.div`
  min-height: 100vh;
`

const LoadingPage = ({ translate }) => (
  <ThemeProvider theme={defaultTheme}>
    <Wrapper>
      <QuotatisLogoStatic />
      <LoadingWrapper>
        <Row>
          <Element><Icon icon="spinner" size={100} /></Element>
          <Element><Heading level={2}>{translate('loading.message')}</Heading></Element>
        </Row>
      </LoadingWrapper>
    </Wrapper>
  </ThemeProvider>
)

LoadingPage.propTypes = {
  translate: PropTypes.func,
}

export default injectTranslate(LoadingPage)
