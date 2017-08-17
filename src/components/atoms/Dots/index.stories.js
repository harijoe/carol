import React from 'react'
import { storiesOf } from '@storybook/react'
import { Dots, Col } from 'components'

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
