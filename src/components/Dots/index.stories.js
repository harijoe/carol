import React from 'react'
import { storiesOf } from '@storybook/react'
import Dots from 'components/Icon'
import Col from 'components/Link'

storiesOf('Dots', module)
  .add('Default', () =>
    <Col>
      <Dots />
    </Col>,
  )
  .add('With focus', () =>
    <Col>
      <Dots focus />
    </Col>,
  )
