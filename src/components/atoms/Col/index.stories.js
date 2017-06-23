import React from 'react'
import { storiesOf } from '@storybook/react'
import { Col } from 'components'

storiesOf('Col', module)
  .add('Default', () => (
    <Col>Col content sample</Col>
  ))
