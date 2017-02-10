import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Heading, Paragraph } from 'components'
import { colors } from 'components/globals'

const Block = styled.div`
  position: 'absolute';
  width: 5em;
  height: 8em;
  left: -25 / 2;
  top: -40 / 2;
  background-color: ${colors.quotatis[0]};
  text-align: center;
  color: #fff;
  font-size: 1em;
  padding: 0.3em;
`

const Marker = ({ title, trade }) => (
  <Block>
    <Heading level={4}>{title}</Heading>
    <Paragraph>{trade}</Paragraph>
  </Block>
)

Marker.propTypes = {
  title: PropTypes.string,
  trade: PropTypes.string,
}

export default Marker
